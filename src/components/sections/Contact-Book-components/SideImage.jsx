import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { block } from "million/react";

const SideImage = block(({ side }) => {
    SideImage.propTypes = {
        side: PropTypes.node.isRequired,
    };
    return (
        <Container>
            <img src={side} alt="Side Image" />
        </Container>
    );
})

export default SideImage;

const Container = styled.div`
    width: 100%;
    padding: 12px;
    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        min-height: 480px;
    }
`;
