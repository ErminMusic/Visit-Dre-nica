import styled from "styled-components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';


function Dropdown( {title, options} ) {

  Dropdown.propTypes = {
    title: PropTypes.string.isRequired, // Require title to be a string
    options: PropTypes.arrayOf(PropTypes.string).isRequired, // Require options to be an array of strings
  };

  return (
    <Container>

      <Wrapp>
         
        <span>{title}</span><CustomArrow />

      </Wrapp>


      <Drop>
        {options.map((item, index) => (
          <DropOptions key={index} href={`/${item}`}>{item}</DropOptions>
        ))}
      </Drop>

    </Container> 
  )
}

export default Dropdown

const CustomArrow = styled(KeyboardArrowDownIcon)`
  &.MuiSvgIcon-root {
    font-size: 36px;
  }
`

const Drop = styled.div`
  background: rgb(83, 137, 140);
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 200px;
  left: 8px;
  top: 100%;
  margin: 5px 0;
  visibility: hidden; 
  opacity: 0; 
  transition: opacity 0.3s ease, visibility 0.3s ease;
  

  @media (max-width: 850px) {
    top: 95%;
    left: 0;
    margin: 0;
    position: relative;
    width: 100%;
    height: 50%;
    display: none;
  }
`

const Container = styled.div`
  position: relative;

  &:hover {
    ${Drop} {
      visibility: visible;
      display: flex;
      opacity: 1;
      z-index: 100;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
  }

  @media (max-width: 850px) {
    background-color: rgb(83, 137, 140);
    
  }

`

const DropOptions = styled.a`
  padding: 20px 15px;
  text-decoration: none;
  color: white;
  background-color: rgb(83, 137, 140);
  z-index: 50;
  border-bottom: 1px solid rgb(61, 100, 102);
`

const Wrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: start;

  }
`