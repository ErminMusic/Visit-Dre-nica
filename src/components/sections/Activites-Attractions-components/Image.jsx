import styled from "styled-components";
import PropTypes from "prop-types";
function Image({img, alt}) {
    Image.propTypes = {
        img: PropTypes.node.isRequired,
        alt: PropTypes.string.isRequired,
    };
    return (
        <ImageHolder>
            <img loading="lazy" src={img} alt={alt} />
        </ImageHolder>
    );
}

export default Image;

const ImageHolder = styled.div`
    width: 35%;
    min-width: 300px;
    padding: 8px;
    img {
        width: 100%;
    }

    @media (max-width: 850px) {
        min-width: 250px;
    }
    @media (max-width: 300px) {
        min-width: 200px;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`;