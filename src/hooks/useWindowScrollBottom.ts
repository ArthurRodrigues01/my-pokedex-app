import { useEffect } from 'react'

function useWindowScrollBottom(callback: () => void, deps: React.DependencyList ) {

  useEffect(() => {
    window.onscroll = () => {
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) callback()
    }
  }, [...deps])

}

export default useWindowScrollBottom