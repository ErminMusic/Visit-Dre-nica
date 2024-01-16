import styled from "styled-components";


function Buttons() {
  return (
    <ButtonHolder>
        <MoreButton><span>LEARN MORE</span></MoreButton>
        <BookButton><span>BOOK</span> THIS ROOM</BookButton>
    </ButtonHolder>
  )
}

export default Buttons

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`;

const MoreButton = styled.div`
    width: 100%;
    text-align: center;
    padding: 16px 0;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background-color: #507D7F;
  
  span {
    font-weight: bold;
  }

  &:hover {
    transition: 250ms;
    opacity: 1;
    background-color: white;
    color: #507D7F;
  }
`;

const BookButton = styled(MoreButton)`
  background-color: #8FBC8F;
  margin-top: 20px;

  &:hover {
    background-color: white;
    color: #8FBC8F;
  }
`;