import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavItems from "./sub-components/Header/NavItems";
import HeaderLogo from "./sub-components/Header/HeaderLogo";
import { useState, useRef, useEffect } from "react";
import { block } from "million";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return block((
        <Wrapper>
            <Container>
                <HeaderLogo />
                <NavBar ref={menuRef} $isMenuOpen={isMenuOpen}>
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
    ));
}

export default Header;

const Wrapper = styled.div`
    height: 80px;
    width: 100%;
    background: #4b7376;
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
    @media (max-width: 991px) {
        width: 100%;
        padding: 0 15px;
    }
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
            $isMenuOpen ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
        background: #4b7376;
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
