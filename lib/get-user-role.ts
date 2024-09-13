import { db } from "@/lib/firestore"

import "server-only"

export async function getUserRole(email: string) {
  // Create a reference to the Firestore document where user's information is stored
  const userRef = db.collection("users").doc(email)

  // Fetch the document to get user details
  const userDoc = await userRef.get()

  // Check if the user exists in Firestore
  if (userDoc.exists) {
    const { role } = userDoc.data()!
    return role
  }
}
