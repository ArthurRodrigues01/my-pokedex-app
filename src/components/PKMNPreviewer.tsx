import styled from 'styled-components'
import { FlexCol, Title, BigTitle, NoFeedbackA } from './generalComponents'
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
const HoverableGrowthFeedbackA = styled(NoFeedbackA)`
  transition: .5s;
  border-top-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border: 3px solid white;
  &: hover {
    z-index: 999;
    transform: scale(1.2);
  }
`

function PKMNPreviewer(props: {type: string, name: string, id: number, sprite_src: string}) {
  return (
    <HoverableGrowthFeedbackA href={`./pokemon/${props.id}`}>
      <PKMNPreviewerWrapper type={props.type} gap={24}>
        <Title>{props.name}</Title>
        <SpriteSphere>
          <SpriteImage src={props.sprite_src}/>
        </SpriteSphere>
        <BigTitle>#{props.id}</BigTitle>
      </PKMNPreviewerWrapper>
    </HoverableGrowthFeedbackA>
  )
}

export default PKMNPreviewer