import PropTypes from "prop-types";
import styled from "styled-components";

const TextHolder = ({ date, title, description, isOpen, toggleReadMore }) => {
    const ShowDescription = {
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box",
    };

    TextHolder.propTypes = {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleReadMore: PropTypes.func.isRequired,
    };

    return (
        <TextContainer>
            <p>
                Reviewed:
                <br />
                {date}
            </p>
            <Title>{title}</Title>
            <Description style={isOpen ? null : ShowDescription}>
                {description}
            </Description>
            {description.length > 200 && (
                <ReadMoreButton onClick={toggleReadMore}>
                    {isOpen ? "Read Less" : "Read More"}
                </ReadMoreButton>
            )}
        </TextContainer>
    );
};

const TextContainer = styled.div`
    p {
        margin: 8px 0;
    }
`;

const Description = styled.p`
    margin: 8px 0;
`;

const ReadMoreButton = styled.button`
    background: none;
    border: none;
    color: #525252;
    cursor: pointer;
    font-weight: bold;
    margin: 8px 0;
    padding: 0;
    outline: none;
    font-size: 16px;
`;

const Title = styled.h2`
    margin: 12px 0;
`;

export default TextHolder;
