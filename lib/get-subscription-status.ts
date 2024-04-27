import { SUBSCRIPTION_STATUS_RESPONSE } from "@/lib/constants";
import { db } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import "server-only";

export async function getSubscriptionStatus(email: string, token: string) {
  try {
    const userRef = db.collection("subscribeUsers");
    const snapshot = await userRef.where("email", "==", email).get();

    if (snapshot.empty) {
      return { message: SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL.title };
    }

    const userData = snapshot.docs[0].data();
    const {
      emailVerified,
      emailVerificationToken,
      emailVerificationLinkExpiry,
    } = userData;

    if (emailVerified) {
      return {
        message: SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_SUCCESS.title,
      };
    }

    if (emailVerificationLinkExpiry < Date.now()) {
      return {
        message:
          SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_LINK.title,
      };
    }

    if (emailVerificationToken === token) {
      await userRef.doc(snapshot.docs[0].id).update({
        emailVerified: true,
        emailVerificationToken: FieldValue.delete(),
        emailVerificationLinkExpiry: FieldValue.delete(),
      });

      return {
        message: SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_SUCCESS.title,
      };
    } else {
      return {
        message:
          SUBSCRIPTION_STATUS_RESPONSE.INVALID_EMAIL_VERIFICATION_TOKEN.title,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message:
        SUBSCRIPTION_STATUS_RESPONSE.SUBSCRIPTION_STATUS_CHECK_FAILED.title,
    };
  }
}
