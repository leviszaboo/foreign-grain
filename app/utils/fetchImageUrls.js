import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { cache } from "react";
import { db } from "@/app/firebase/config";

export const revalidate = 0;

export const fetchImageUrls = cache(async (ref) => {
      try {
        const querySnapshot = await getDocs(query(collection(db, ref), orderBy("createdAt", "desc")));
        
        const urls = querySnapshot.docs.map((doc) => doc.data().url);
        
        return urls;
      } catch (error) {
        console.error("Error fetching image URLs:", error);
        return []; 
      }
  }
)
  