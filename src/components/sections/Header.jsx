import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavItems from './sub-components/NavItems';
import { Suspense, useState, useEffect } from 'react';

function Header() {

  const [logo, setLogo] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const logo = await import('../../../public/Images/Logo.webp');
        setLogo(() => logo.default);
        
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadIcons();
  }, []);

  return (
    <Wrapper>
      <Container>
        
        <a href="/">
          <Logo>
            <Suspense fallback={<div>Loading...</div>}>
              <LogoImage
                alt="Logo"
                src={logo}
                loading="lazy"
                srcSet={`${logo} 300w, ${logo} 768w, ${logo} 1280w`}
                sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw"
              />
            </Suspense>
            <Title>VISIT <br />DREŽNICA</Title>
          </Logo>
        </a>

        <NavBar $isMenuOpen={isMenuOpen}>
          <NavItems />
        </NavBar>

        <MenuHolder>
          {isMenuOpen ? (
            <CustomClose onClick={toggleMenu} />
          ) : (
            <CustomMenu onClick={toggleMenu} />
          )}
        </MenuHolder>

      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  background: #507D7F;
  display: flex;
  justify-content: center;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
  }

  @media (max-width: 991px){
    width: 100%;
    padding: 0 15px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 100%; /* Adjust as needed */
  height: 100%;
  max-width: 70px; /* Set a maximum width */
`;

const Title = styled.h2`
  color: white;
  padding: 0 10px;
`;

const NavBar = styled.div`
  width: 68%;
  z-index: 100;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 850px) {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 850px) {
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    background-color: #507D7F;
    position: fixed;
    padding: 0 16px;
    height: auto;
    width: 250px;
    top: 80px;
    right: 0;
    z-index: 1;
  }
`;

const MenuHolder = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: block;
  }
`;

const CustomMenu = styled(MenuIcon)`
  &.MuiSvgIcon-root {
    font-size: 36px;
    cursor: pointer;
    color: white;
  }
`;

const CustomClose = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    font-size: 36px;
    cursor: pointer;
    color: white;
  }
`;