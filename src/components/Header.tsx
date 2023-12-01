import styled from 'styled-components'
import { FlexCol, FlexRow, BigTitle } from './generalComponents'

const RightSideNavbar = styled(FlexCol)`
  position: fixed;
  height: 100vh;
  background-color: green;
  float: left;
  width: 16rem;
  padding: 1.5rem;
`

function Header() {
  return (
    <RightSideNavbar gap={25}>
      <BigTitle>Pókedex</BigTitle>
      <FlexRow>
        <a href="/pokemon">Pókemons</a>
        <a href="/">Main Page</a>
      </FlexRow>
    </RightSideNavbar>
  )
}

export default Header