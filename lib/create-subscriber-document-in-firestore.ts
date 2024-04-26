import crypto from "crypto";
import "server-only";

const ONE_HOUR_IN_MS = 3600000; // 60 minutes * 60 seconds * 1000 ms

export async function createSubscriberDocumentInFirestore(
  email: string,
  userRef: any,
) {
  const emailVerificationToken = crypto.randomBytes(20).toString("hex");
  const emailVerificationLinkExpiry = Date.now() + ONE_HOUR_IN_MS;

  let role = "user";

  if (
    email === "rawgrittt@gmail.com" ||
    email === "pgcim14.hemant@spjimr.org"
  ) {
    role = "admin";
  }

  await userRef.add({
    email,
    emailVerified: false,
    emailVerificationToken,
    emailVerificationLinkExpiry,
    role,
  });

  return { email, emailVerificationToken };
}
