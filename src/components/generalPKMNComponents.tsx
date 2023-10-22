import styled from 'styled-components'

const SpriteSphere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100000px;
  background-color: #ffe294;

  width: 250px;
  height: 250px;
`
const SpriteImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`

export {SpriteSphere, SpriteImage}