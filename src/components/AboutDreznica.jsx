import styled from "styled-components"
import AboutImg from "../../public/Images/About.webp"

function AboutDreznica() {
  return (
    <Wrap>
      
      <Container> 

        <ImageHolder>
          <Image alt="About" src={AboutImg} />
        </ImageHolder>
        
        <ContentHolder>
          
          <h1>About <span>Drežnica</span></h1>

          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.
          </Content>

        </ContentHolder>
      
      </Container>
      
    </Wrap>
  )
}

export default AboutDreznica

const Wrap = styled.div`
  background-color: #F0FFF0;
  color: #525252;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 36px 0;
`

const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 850px) {
    width: 95%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const ContentHolder = styled.div`
  width: 45%;
  padding: 16px 24px;

  h1 {
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 90%;
    padding: 16px 24px 0;
  }
    @media (max-width: 500px) {
    width: 100%;
  }
`

const Content = styled.p`
  margin: 12px 0 0 0;
`

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;

  @media (max-width: 1100px) {
    width: 50%;
    padding: 4px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
    @media (max-width: 500px) {
    width: 100%;
  }
`;

const Image = styled.img`
  border-radius: 16px;
  width: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }


`;

// Mobile (up to 576px):


// @media (max-width: 576px) {
//   /* Custom styling for mobile devices */
// }


// Portrait Tablets (577px to 768px):
// @media (min-width: 577px) and (max-width: 768px) {
//   /* Custom styling for portrait tablets */
// }


// Tablets and Desktops (769px to 991px):
// @media (min-width: 769px) and (max-width: 991px) {
//   /* Custom styling for tablets and desktops */
// }


// Desktops (992px to 1199px):
// @media (min-width: 992px) and (max-width: 1199px) {
//   /* Custom styling for desktops */
// }


// Large Desktops (1200px and above):
// @media (min-width: 1200px) {
//   /* Custom styling for large desktops */
// }