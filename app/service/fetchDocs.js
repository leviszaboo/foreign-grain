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
    const querySnapshot = await getDocs(
      query(collection(db, ref), orderBy("createdAt", "desc")),
    );

    const docs = querySnapshot.docs.map((doc) => {
      const { createdAt, ...data } = doc.data();

      return data;
    });

    return docs;
  } catch (error) {
    return [];
  }
});

export const fetchDoc = cache(async (ref) => {
  try {
    const querySnapshot = await getDoc(doc(db, ref));

    if (querySnapshot.exists()) {
      const { createdAt, ...data } = querySnapshot.data();
      console.log(data);
      return data;
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
});
