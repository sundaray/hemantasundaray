import { db } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { NextResponse, NextRequest } from "next/server";

const RESPONSE_MESSAGES = {
  INVALID_EMAIL: "Invalid email",
  INVALID_TOKEN: "Invalid token",
  LINK_EXPIRED: "Link expired. Please subscribe again.",
  SUBSCRIPTION_COMPLETE:
    "Subscribed! I'll keep you updated on the course progress.",
};

export async function POST(request: NextRequest) {
  try {
    const { email, token } = await request.json();
    const userRef = db.collection("subscribeUsers");
    const snapshot = await userRef.where("email", "==", email).get();

    if (snapshot.empty) {
      return NextResponse.json({ message: RESPONSE_MESSAGES.INVALID_EMAIL });
    }

    const userData = snapshot.docs[0].data();
    const {
      emailVerified,
      emailVerificationToken,
      emailVerificationLinkExpiry,
    } = userData;

    if (emailVerified) {
      return NextResponse.json({
        message: RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE,
      });
    }

    if (emailVerificationLinkExpiry < Date.now()) {
      return NextResponse.json({ message: RESPONSE_MESSAGES.LINK_EXPIRED });
    }

    if (emailVerificationToken === token) {
      await userRef.doc(snapshot.docs[0].id).update({
        emailVerified: true,
        emailVerificationToken: FieldValue.delete(),
        emailVerificationLinkExpiry: FieldValue.delete(),
      });

      return NextResponse.json({
        message: RESPONSE_MESSAGES.SUBSCRIPTION_COMPLETE,
      });
    } else {
      return NextResponse.json({ message: RESPONSE_MESSAGES.INVALID_TOKEN });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
