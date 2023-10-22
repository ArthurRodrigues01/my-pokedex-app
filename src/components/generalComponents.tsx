import styled from 'styled-components'

const CenteredPage = styled.div`
  min-height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-left: calc(16rem + 3rem);
`
const Title = styled.h1 `
  color: #fff;
  font-size: 2rem;
`
const BigTitle = styled(Title)`
  font-size: 3rem;
`
const FlexRow = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || 0}px
`
const FlexCol = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || 0}px
`

export { CenteredPage, Title, BigTitle, FlexRow, FlexCol }