import styled from "styled-components";
import PropTypes from 'prop-types';

function Activitie({ list }) {

  Activitie.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        alter: PropTypes.string.isRequired,
        image: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  return (
    <>
      {list.map((item, index) => (
        <Container key={index}>

        <Image 
          alt={item.alter}
          src={item.image} 
          loading="lazy"
        />

        <ContentHolder>
          <h2>{item.name}</h2>
        </ContentHolder>

        <Button href={item.link}>LEARN MORE</Button>
        
      </Container>
      ))}
    </>
  )
}

export default Activitie

const Container = styled.div`
  width: 45%;
  color: #525252;
  padding: 12px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const Image = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 16px;

  @media (max-width: 1100px) {
    width: 85%;
    height: 85%;
  }
  @media (max-width: 900px) {
    width: 90%;
    height: 90%;
  }
`;

const ContentHolder = styled.div`
  margin: 8px 0;
`;

const Button = styled.a`
  text-decoration: none;
  border-radius: 10px;
  background-color: rgb(80, 125, 127);
  text-align: center;
  width: 70%;
  padding: 16px 0px;
  cursor: pointer;
  font-weight: bold;
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: 250ms;
    opacity: 1;
    background-color: white;
    color: rgb(80, 125, 127);
  }

  @media (max-width: 1100px) {
    width: 85%;
    height: 85%;
  }
  @media (max-width: 900px) {
    width: 90%;
    height: 90%;
  }

`;
// const h1 = styled.div`

// `;