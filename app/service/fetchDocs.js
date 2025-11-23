import {
  getDocs,
  getDoc,
  query,
  collection,
  orderBy,
  doc,
} from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";

export const fetchDocs = cache(async (ref) => {
  try {
    if (!ref || typeof ref !== "string") {
      console.error("Invalid ref provided to fetchDocs:", ref);
      return [];
    }

    const querySnapshot = await getDocs(
      query(collection(db, ref), orderBy("createdAt", "desc")),
    );

    const docs = querySnapshot.docs.map((doc) => {
      const { createdAt, ...data } = doc.data();
      // Add document ID to data for better tracking
      return { ...data, id: doc.id };
    });

    return docs;
  } catch (error) {
    console.error("Error fetching docs from", ref, ":", error);
    return [];
  }
});

export const fetchDoc = cache(async (ref) => {
  try {
    if (!ref || typeof ref !== "string") {
      console.error("Invalid ref provided to fetchDoc:", ref);
      return {};
    }

    const querySnapshot = await getDoc(doc(db, ref));

    if (querySnapshot.exists()) {
      const { createdAt, ...data } = querySnapshot.data();
      // Add document ID to data
      return { ...data, id: querySnapshot.id };
    } else {
      console.warn("Document not found:", ref);
      return {};
    }
  } catch (error) {
    console.error("Error fetching doc from", ref, ":", error);
    return {};
  }
});

export const fetchUrls = cache(async (ref) => {
  try {
    if (!ref || typeof ref !== "string") {
      console.error("Invalid ref provided to fetchUrls:", ref);
      return [];
    }

    const querySnapshot = await getDocs(
      query(collection(db, ref), orderBy("createdAt", "desc")),
    );

    const urls = querySnapshot.docs
      .map((doc) => doc.data().url)
      .filter((url) => url && typeof url === "string");

    return urls;
  } catch (error) {
    console.error("Error fetching URLs from", ref, ":", error);
    return [];
  }
});
