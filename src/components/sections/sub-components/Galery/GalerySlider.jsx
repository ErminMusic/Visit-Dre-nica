import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";

function GalerySlider({ images }) {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
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
            <TitleHolder>
                <Title>Gallery:</Title>
            </TitleHolder>
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
    justify-content: center;
    flex-direction: column;

    @media (max-width: 850px) {
        width: 95%;
    }
`;

const Title = styled.h1``;

const TitleHolder = styled.div`
    margin: 0 0 16px 0;
`;

const StyledSlider = styled(Slider)`
    width: 100%;

    ul li button {
        color: white;

        &:before {
            font-size: 15px;
            color: rgb(0, 0, 0);
        }
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-prev::before,
    .slick-next::before {
        color: #8fbc8f;
        display: none;
    }
`;

const ImageHolder = styled.div`
    height: 400px;
    padding: 0 16px;
`;

const Image = styled.img`
    height: 100%;
`;

export default GalerySlider;
