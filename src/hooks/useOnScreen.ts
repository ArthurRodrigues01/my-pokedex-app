import { RefObject, useState, useMemo, useEffect } from "react"

function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [])


  useEffect(() => {
    if (observer && ref) {
      observer.observe(ref.current as Element)
      
      // cleanup
      return () => observer.disconnect()
    }
  }, [ref, observer])

  return {
    isVisible: isIntersecting
  }
}

export default useOnScreen