import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';

function Strip() {
  return (
    <Wrap>

      <Container>
        
      </Container>
        
    </Wrap>
  )
}

export default Strip

const Wrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: #F8F5DF;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  border: 1px solid black;
`

