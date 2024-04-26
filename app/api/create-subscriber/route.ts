import { SUBSCRIPTION_RESPONSE } from "@/lib/constants";
import { createSubscriberDocumentInFirestore } from "@/lib/create-subscriber-document-in-firestore";
import { db } from "@/lib/firebase-admin";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const ONE_HOUR_IN_MS = 3600000; // 60 minutes * 60 seconds * 1000 ms

export async function POST(request: NextRequest) {
  try {
    const { email: registrationEmail } = await request.json();

    // Check if the user exists in the database
    const userRef = db.collection("subscribeUsers");
    const snapshot = await userRef
      .where("email", "==", registrationEmail)
      .get();

    // The email has not been used to subscribe before.
    // Create a user document
    if (snapshot.empty) {
      const { email, emailVerificationToken } =
        await createSubscriberDocumentInFirestore(registrationEmail, userRef);
      return NextResponse.json({
        message: SUBSCRIPTION_RESPONSE.SUBSCRIBER_DOCUMENT_CREATED.title,
        email,
        emailVerificationToken,
      });
    }

    // The email already exists in the database.
    // Carry out further checks
    const userData = snapshot.docs[0].data();
    const { email, emailVerified, emailVerificationLinkExpiry } = userData;

    // Check 1
    // User already subscribed
    if (email === registrationEmail && emailVerified === true) {
      return NextResponse.json({
        message: SUBSCRIPTION_RESPONSE.USER_ALREADY_SUBSCRIBED.title,
      });
    }

    // Check 2
    // Email verification link already sent
    if (emailVerificationLinkExpiry > Date.now()) {
      return NextResponse.json({
        message:
          SUBSCRIPTION_RESPONSE.EMAIL_VERIFICATION_LINK_ALREADY_SENT.title,
      });
    }

    // Email verification link expired
    // Send a new link
    const newEmailVerificationToken = crypto.randomBytes(20).toString("hex");
    const newEmailVerificationLinkExpiry = Date.now() + ONE_HOUR_IN_MS;
    const docToUpdate = snapshot.docs[0];

    await userRef.doc(docToUpdate.id).update({
      emailVerificationToken: newEmailVerificationToken,
      emailVerificationLinkExpiry: newEmailVerificationLinkExpiry,
    });

    return NextResponse.json({
      message: SUBSCRIPTION_RESPONSE.SEND_EMAIL_VERIFICATION_LINK.title,
      email,
      emailVerificationToken: newEmailVerificationToken,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
