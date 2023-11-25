import styled, { keyframes } from 'styled-components'
import { CenteredFlexCol, BigTitle } from './generalComponents'

const rotatingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Rotate = styled.div`
  animation: ${rotatingAnimation} 2s linear infinite;
`
const Pokeball = styled.img<{ width: number, height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
const WhiteTitle = styled(BigTitle)`
  color: #ffffff;
`

function LoadingFeedback( { width, height }: { width?: number, height?: number }) {
  width = !width ? width = 250 : width
  height = !height ? height = 250 : height
  
  return (
    <CenteredFlexCol>
      <Rotate>
        <Pokeball width={width} height={height} src='/pokeball.svg' alt='loading'/>
      </Rotate>
      <WhiteTitle>Loading...</WhiteTitle>
    </CenteredFlexCol>
  )
}

export default LoadingFeedback