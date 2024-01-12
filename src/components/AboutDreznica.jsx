import styled from "styled-components"
import AboutImg from "../../public/Images/About.webp"

function AboutDreznica() {
  return (
    <Wrap>
      
      <Container> 
        
        <Image alt="About" src={AboutImg} />
        
        <ContentHolder>
          
          <h1>About <span>Drežnica</span></h1>

          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis. Iure ducimus nulla aliquid enim eligendi blanditiis! Dolorem ex voluptatum deserunt. Dolorem, ad fugiat!
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
  padding: 46px 0;
`

const Container = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  justify-content: center;
  border: 1px solid black;
`

const ContentHolder = styled.div`
  width: 45%;
  border: 1px solid black;
  padding: 16px 24px;

  h1 {
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }

`

const Content = styled.p`

`

const Image = styled.img`
  border-radius: 16px;
  width: 45%;
`