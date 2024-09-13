import { db } from "@/lib/firestore"

import "server-only"

export async function createUser(email: string, role: string) {
  // Create a reference to the Firestore document where the user information is stored
  const userRef = db.collection("users").doc(email)

  // Fetch the document to check if the user already exists
  const userDoc = await userRef.get()

  // If the user doesn't already exist in Firestore, create a new document
  if (!userDoc.exists) {
    userRef.set({
      email,
      role,
    })
  }
}
