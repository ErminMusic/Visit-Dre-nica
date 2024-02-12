import styled from "@emotion/styled";
import PropTypes from "prop-types";

function BackgroundHolder({Bg, BgPhone}) {
    BackgroundHolder.propTypes = {
        Bg: PropTypes.node.isRequired,
        BgPhone: PropTypes.node.isRequired,
    };
    return (
        <>
            <BackgroundImage
                alt="Background"
                src={Bg}
                srcSet={`${BgPhone} 600w, ${Bg} 1920w`}
                sizes="(max-width: 600px) 100vw, 1920px"
            />
        </>
    );
}

export default BackgroundHolder;

const BackgroundImage = styled.img`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
