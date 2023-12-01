import { RefObject, useState, useMemo, useEffect } from "react"

function useOnScreen(ref: RefObject<HTMLElement>) {

  // const observer = useMemo(() => new IntersectionObserver(
  //   ([entry]) => setIntersecting(entry.isIntersecting)
  // ), [])


  // useEffect(() => {
  //   if (ref)
  //   if (observer && ref) {
  //     observer.observe(ref.current as Element)
      
  //   }

  //   // cleanup
  //   return () => observer.disconnect()
  // }, [ref.current, observer])
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (!currentElement) return
      observer.unobserve(currentElement);
    };
  }, []);

  return {
    isVisible: isVisible
  }
}

export default useOnScreen