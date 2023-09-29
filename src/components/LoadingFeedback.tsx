import styled, { keyframes } from 'styled-components'

// const LoadingFeedbackText = styled.h1`
//   font-weight: bold;
//   color: #ffffff;
//   margin: 0;
//   padding: 0;
// `
// const LoadingFeedbackWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;
//   gap: 25px;
// `
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


const Pokeball = styled.img`
  width: 250px;
  height: 250px;
`

function LoadingFeedback() {
  return (
    <Rotate>
      <Pokeball src='/pokeball.svg' alt='loading'/>
    </Rotate>
  )
}

export default LoadingFeedback