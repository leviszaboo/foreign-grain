import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/app/hooks/UseMenu";
import { useSlideshowStore } from "@/app/hooks/UseSlideshow";
import { 
  getDownloadURL, 
  listAll,
  ref
} from "firebase/storage";
import { storage } from "@/app/firebase/firebase";

export default function Slideshow() {

  const { isMenuVisible } = useMenuStore();

  const animationTime = 7500;
  const [aspectRatio, setAspectRatio] = useState(0);
  const { currentSlide, setCurrentSlide } = useSlideshowStore();
  const [verticalUrls, setVerticalUrls] = useState([]);
  const [horizontalUrls, setHorizontalUrls] = useState([]);

  const verticalListRef = ref(storage, `${process.env.NEXT_PUBLIC_USER_ID}/featured/vertical/`);
  const horizontalListRef = ref(storage, `${process.env.NEXT_PUBLIC_USER_ID}/featured/horizontal/`);

  async function fetchImageUrls(listRef, setterFunction) { 
    try {
      const res = await listAll(listRef)
      
      const urlPromises = res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      });

      const imageUrls = await Promise.all(urlPromises);
      setterFunction(imageUrls);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  }

  useEffect(() => {
    fetchImageUrls(verticalListRef, setVerticalUrls);
    fetchImageUrls(horizontalListRef, setHorizontalUrls)
  }, [])

  const checkAspectRatio = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;
    return aspectRatio;
  };

  useEffect(() => {
    const handleResize = () => {
    const newAspectRatio = checkAspectRatio();
    setAspectRatio(newAspectRatio);
    };

    handleResize();
    const totalSlides = aspectRatio > 0.85 ? horizontalUrls.length : verticalUrls.length;

    const interval = setInterval(() => {
      setCurrentSlide(
        totalSlides === 0 ? 0 : (currentSlide + 1) % totalSlides
      );
    }, animationTime);

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide, horizontalUrls, verticalUrls]);

  return (
    <>
      <AnimatePresence>
        {!isMenuVisible && (
          <motion.div 
            className="background"
            initial = {{
              opacity: 0,
            }}
            animate = {{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition : {
                duration: 0.55
              }
            }}
            transition={{
              duration: 0.8
            }}
          >
            <motion.div
            className = "slide-wrapper"
              key={ currentSlide }
              initial = {{
                opacity: 0,
                scale: 1.08,
              }}
              animate = {{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition = {{
                opacity: {
                  duration: 1
                },
                scale: {
                  duration: 8
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5
                }
              }}
            >
              <img
                src={
                  aspectRatio > 0.85 
                  ? horizontalUrls[currentSlide] 
                  : verticalUrls[currentSlide]
                }
                className="slide"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}