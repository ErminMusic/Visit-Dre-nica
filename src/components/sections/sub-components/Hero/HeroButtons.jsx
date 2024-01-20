import styled from "styled-components";
import PropTypes from "prop-types";

function HeroButtons({ content }) {
    HeroButtons.propTypes = {
        content: PropTypes.arrayOf(
            PropTypes.shape({
                buttonOne: PropTypes.string.isRequired,
                buttonOneSpan: PropTypes.string.isRequired,
                buttonTwo: PropTypes.string.isRequired,
                buttonTwoSpan: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    return (
        <ButtonHolder>
            <BookButton>
                {content.buttonOne} <span>{content.buttonOneSpan}</span>
            </BookButton>
            <ContactButton>
                <span>{content.buttonTwoSpan}</span> {content.buttonTwo}
            </ContactButton>
        </ButtonHolder>
    );
}

export default HeroButtons;

const ButtonHolder = styled.div``;
const BookButton = styled.div`
    border-radius: 10px;
    background-color: rgb(80, 125, 127);
    text-align: center;
    width: 50%;
    padding: 16px 0px;
    cursor: pointer;
    opacity: 0.9;
    span {
        font-weight: bold;
    }
    &:hover {
        transition: 250ms;
        opacity: 1;
        background-color: white;
        color: rgb(80, 125, 127);
    }
    @media (max-width: 500px) {
        width: 55%;
    }
    @media (max-width: 420px) {
        width: 65%;
    }
`;

const ContactButton = styled(BookButton)`
    background-color: #8fbc8f;
    margin-top: 20px;
    &:hover {
        background-color: white;
        color: #8fbc8f;
    }
`;