import { styled } from "styled-components/"
import { NoFeedbackAnchor } from "./generalComponents"

const PaginationBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 1000px;
`
const PaginationButton = styled(NoFeedbackAnchor)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 0 1.5rem 0 1.5rem; 
  height: 3rem;
  width: 3rem;

  &: hover {
    background-color: gray;
  }
  &: first-child {
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
  }
  &: last-child {
    border-top-right-radius: 1000px;
    border-bottom-right-radius: 1000px;
  }
`
const Centered = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  height: 3rem;
  width: 3rem;
  padding: 0 1.5rem 0 1.5rem;
`
const PaginationIcon = styled.img`
  height: 2rem;
  width: 2rem;
`

function PaginationBar({ current, growth, max }: { current: number, growth: number, max: number }) {
  let initialCell: number
  const numberOfCells = 1 + (growth * 2)
  let cells: number[] = []

  if ((current - growth) < 1) {
    initialCell = 1
  } else if ((current + growth) > max) {
    initialCell = max - (numberOfCells - 1) 
  } else {
    initialCell = current - growth
  }

  for (let i = 0; i < numberOfCells; i++) {
    cells.push(initialCell)
    initialCell++
  }
  
  return (
    <PaginationBarWrapper>
      {cells.map((cell) => {
        if (cell == current) {
          return <Centered key={cell}><PaginationIcon src="/pokeball.svg"/></Centered>
        } 

        return <PaginationButton href={`./${cell}`} key={cell}>{cell}</PaginationButton>
      })}   
    </PaginationBarWrapper>
  )
}


export default PaginationBar