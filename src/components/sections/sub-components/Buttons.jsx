import styled from "styled-components";

function Buttons() {
  return (
    <ButtonHolder>

      <MoreButton>
        <span>LEARN </span>MORE
      </MoreButton>
      <BookButton>
        <span>BOOK</span> THIS ROOM
      </BookButton>
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
  position: relative;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  background-color: #8fbc8f;
  z-index: 50;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  }
  
  span {
    font-weight: bold;
  }

  &:hover {
    transition: 250ms;
    background-color: white;
    color: #8FBC8F;
  }
`;

const BookButton = styled(MoreButton)`
  background-color: #507D7F;
  margin-top: 20px;

  &:hover {
    background-color: white;
    color: #507D7F;
  }
`;