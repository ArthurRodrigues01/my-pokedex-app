import styled from 'styled-components'

const TypeSphere  = styled.div<{type: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${props => getPKMNTypeColor(props.type)}
`

const TypeImage = styled.img`
  height: 25px;
  width: 25px;
`

export { TypeSphere, TypeImage, getPKMNTypeColor, getPKMNWrapperBGColor }



function getPKMNWrapperBGColor(PKMNType: string): string {
  switch(PKMNType) {
    case 'bug':
      return '#759623'
    case 'dark': 
      return '#3a3940' 
    case 'dragon':
      return '#0a57a6'  
    case 'electric':
      return '#c9b542'  
    case 'fairy':
      return '#c777c0'  
    case 'fighting':
      return '#a31d38'  
    case 'fire':
      return '#db7f2a'  
    case 'flying':
      return '#798db3'  
    case 'ghost':
      return '#454f87'  
    case 'grass':
      return '#468a41'  
    case 'ground':
      return '#a16735'  
    case 'ice':
      return '#518f85'  
    case 'normal':
      return '#6c6e6b'  
    case 'poison':
      return '#7410ad'  
    case 'psychic':
      return '#d1706d'  
    case 'rock':
      return '#877e5d'  
    case 'steel':
      return '#3a646e'  
    case 'water':
      return '#3f75a6'
    default:
      return '#d4d4d4'  
  }
}
function getPKMNTypeColor(PKMNType: string): string {
  switch(PKMNType) {
    case 'bug':
      return '#92BC2C'
    case 'dark': 
      return '#595761' 
    case 'dragon':
      return '#0C69C8'  
    case 'electric':
      return '#F2D94E'  
    case 'fairy':
      return '#EE90E6'  
    case 'fighting':
      return '#de264a'  
    case 'fire':
      return '#ff9430'  
    case 'flying':
      return '#A1BBEC'  
    case 'ghost':
      return '#5F6DBC'  
    case 'grass':
      return '#5FBD58'  
    case 'ground':
      return '#d18645'  
    case 'ice':
      return '#75D0C1'  
    case 'normal':
      return '#A0A29F'  
    case 'poison':
      return '#9d15eb'  
    case 'psychic':
      return '#FA8581'  
    case 'rock':
      return '#C9BB8A'  
    case 'steel':
      return '#5695A3'  
    case 'water':
      return '#539DDF'
    default:
      return '#d4d4d4'  
  }
}