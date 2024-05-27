import styled from "styled-components";
import logo from "../../../assets/Icons/Logo.webp";

function HeaderLogo() {
    return (
        <>
            <Link href="/">
                <Logo>
                    <LogoImage
                        alt="Logo"
                        src={logo}
                        loading="lazy"
                        srcSet={`${logo} 300w, ${logo} 768w, ${logo} 1280w`}
                        sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                    <h1>
                        VISIT <br />
                        DREŽNICA
                    </h1>
                </Logo>
            </Link>
        </>
    );
}

export default HeaderLogo;

const Link = styled.a`
    text-decoration: none;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
        font-size: 24px;
        color: white;
        padding: 0 10px;
    }
`;
const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 70px;
`;
// const Title = styled.h2``;
