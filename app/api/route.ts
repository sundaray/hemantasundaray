import { createSubscribeUserDocumentInFirestore } from "@/lib/create-subscribe-user-document-in-firestore";
import { db } from "@/lib/firebase-admin";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const RESPONSE_MESSAGES = {
  NEW_SUBSCRIBE_USER_CREATED: "New subscribe user document created",
  USER_ALREADY_SUBSCRIBED: "User already subscribed",
  EMAIL_VERIFICATION_LINK_ALREADY_SENT:
    "Email verification link already sent. Please check your inbox and verify your email.",
  NEW_EMAIL_VERIFICATION_LINK_SENT: "New email verification link sent",
};

const ONE_HOUR_IN_MS = 3600000; // 60 minutes * 60 seconds * 1000 ms

export async function POST(request: NextRequest) {
  try {
    const { email: registrationEmail } = await request.json();

    const userRef = db.collection("subscribeUsers");
    const snapshot = await userRef
      .where("email", "==", registrationEmail)
      .get();

    if (snapshot.empty) {
      const { email, emailVerificationToken } =
        await createSubscribeUserDocumentInFirestore(
          registrationEmail,
          userRef,
        );
      return NextResponse.json({
        message: RESPONSE_MESSAGES.NEW_SUBSCRIBE_USER_CREATED,
        email,
        emailVerificationToken,
      });
    }

    const userData = snapshot.docs[0].data();
    const { email, emailVerified, emailVerificationLinkExpiry } = userData;

    if (email === registrationEmail && emailVerified === true) {
      return NextResponse.json({
        message: RESPONSE_MESSAGES.USER_ALREADY_SUBSCRIBED,
      });
    }

    if (emailVerificationLinkExpiry > Date.now()) {
      return NextResponse.json({
        message: RESPONSE_MESSAGES.EMAIL_VERIFICATION_LINK_ALREADY_SENT,
      });
    }

    const newEmailVerificationToken = crypto.randomBytes(20).toString("hex");
    const newEmailVerificationLinkExpiry = Date.now() + ONE_HOUR_IN_MS;
    const docToUpdate = snapshot.docs[0];

    await userRef.doc(docToUpdate.id).update({
      emailVerificationToken: newEmailVerificationToken,
      emailVerificationLinkExpiry: newEmailVerificationLinkExpiry,
    });

    return NextResponse.json({
      message: RESPONSE_MESSAGES.NEW_EMAIL_VERIFICATION_LINK_SENT,
      email,
      emailVerificationToken: newEmailVerificationToken,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
