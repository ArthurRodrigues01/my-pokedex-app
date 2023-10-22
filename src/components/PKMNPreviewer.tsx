import styled from 'styled-components'
import { FlexCol, Title, BigTitle } from './generalComponents'
import { SpriteSphere, SpriteImage } from './generalPKMNComponents'
import { getPKMNTypeColor } from './pkmnTypeSphereComponents'

const PKMNPreviewerWrapper = styled(FlexCol)<{type: string}>`
  padding: 2rem;
  background-color: ${props => getPKMNTypeColor(props.type)};
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  align-items: center;
  color: #fff;
`

function PKMNPreviewer(props: {type: string, name: string, id: number, sprite_src: string}) {
  return (
    <PKMNPreviewerWrapper type={props.type} gap={24}>
      <Title>{props.name}</Title>
      <SpriteSphere>
        <SpriteImage src={props.sprite_src}/>
      </SpriteSphere>
      <BigTitle>#{props.id}</BigTitle>
    </PKMNPreviewerWrapper>
  )
}

export default PKMNPreviewer