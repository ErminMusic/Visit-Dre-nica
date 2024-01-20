import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";

function GalerySlider({ images }) {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    };

    GalerySlider.propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.node.isRequired,
                alter: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    return (
        <Container>
            <StyledSlider {...settings}>
                {images.map((item, index) => (
                    <ImageHolder key={index}>
                        <Image alt={item.alter} src={item.image} />
                    </ImageHolder>
                ))}
            </StyledSlider>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    height: 450px;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1100px) {
        height: 340px;
    }

    @media (max-width: 850px) {
        width: 95%;
        height: 260px;
    }

    @media (max-width: 600px) {
        height: 210px;
    }
`;

const StyledSlider = styled(Slider)`
    width: 100%;
    border: none;

    ul li button {
        color: white;
        &:before {
            font-size: 15px;
            color: rgb(0, 0, 0);
            margin-top: 15px;
        }
    }

    .slick-list {
        overflow: hidden;
        display: block;
        width: 100%;
        height: auto;
    }

    .slick-prev::before,
    .slick-next::before {
        display: none;
    }
`;

const ImageHolder = styled.div`
    height: 400px;
    width: auto;
    padding: 0 16px;

    @media (max-width: 1100px) {
        height: 330px;
        width: auto;
    }

    @media (max-width: 850px) {
        height: 250px;
        width: auto;
    }

    @media (max-width: 600px) {
        height: 200px;
        width: auto;
    }
`;

const Image = styled.img`
    height: 100%;
    width: auto;
`;

export default GalerySlider;
