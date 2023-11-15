import styled from "styled-components"
import { useEffect, useState } from "react"
import { CenteredPage, Title, BigTitle, FlexRow, FlexCol} from "../components/generalComponents"
import { getNextPKMNsURLs } from "../functions/poke-functions"
import PKMNPreviewer from '../components/PKMNPreviewer'


//https://pokeapi.co/api/v2/pokemon?limit=xxx&offset=xxx
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/xxx.png

const FlexPage = styled(FlexRow)`
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap; 
`

function MainPage() {
  const [nextFetch, setNextFetch] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=48')
  const [nextPKMNsURLs, setNextPKMNsURLs] = useState([''])
  const [nextPKMNs, setNextPKMNs] = useState([{type: '', name: '', sprite: '', id: 0}])

  useEffect(() => {
    const realScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
    if (nextPKMNsURLs.length == 1) {
      getNextPKMNsURLs(nextFetch).then(res => {
        setNextFetch(res.next)
        setNextPKMNsURLs(res.results)
      })
    }

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop == realScrollHeight) {
        getNextPKMNsURLs(nextFetch).then(res => {
          setNextFetch(res.next)
          setNextPKMNsURLs(res.results)
        })
      }
    })
  }, [])

  useEffect(() => { 
    var PKMNs: {type: string, name: string, sprite: string, id: number}[] = []

    if (nextPKMNsURLs.length != 1) {
      nextPKMNsURLs.forEach(nextPKMNURL => {
        fetch(nextPKMNURL).then(res => res.json()).then(res => PKMNs.push({
          type: res.types[0].type.name,
          name: res.name,
          sprite: res.sprites.other['official-artwork'].front_default,
          id: res.id
        }))
      })

      setNextPKMNs(PKMNs)
    }   

  },[nextPKMNsURLs])
  

  // TODO: proper way of adding the first 48 pkmns and new pkmns into dom without breaking everything
  
  if (nextPKMNs[0]  == undefined) return 'Loading...'

  return (
    <CenteredPage>
      <FlexPage>
        { nextPKMNs.map(nextPKMN => <PKMNPreviewer type={nextPKMN.type} name={nextPKMN.name} id={nextPKMN.id} sprite_src={nextPKMN.sprite}/>) }  
      </FlexPage>
    </CenteredPage>
  )
}

export default MainPage