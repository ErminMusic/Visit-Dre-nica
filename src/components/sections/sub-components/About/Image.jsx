import styled from "styled-components";
import PropTypes from "prop-types";

function Image({ image, alter }) {
    Image.propTypes = {
        alter: PropTypes.string.isRequired,
        image: PropTypes.node.isRequired,
    };
    return (
        <ImageHolder>
            <AboutImage loading="lazy" alt={alter} src={image} />
        </ImageHolder>
    );
}

export default Image;

const ImageHolder = styled.div`
    display: flex;
    justify-content: center;
    width: 35%;
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
const AboutImage = styled.img`
    border-radius: 16px;
    width: 100%;
    height: 100%;
`;