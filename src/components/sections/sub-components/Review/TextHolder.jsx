import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextHolder = ({ date, title, description, disliked }) => {
    const [isOpen, setIsOpen] = useState(false);
    TextHolder.propTypes = {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        disliked: PropTypes.string.isRequired,
    };
    const showDescriptionStyle = {
        WebkitLineClamp: isOpen ? "unset" : 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box",
    };
    const paragraphs = description.split('\n').map((paragraph, index) => (
        <Description key={index}>
            {paragraph}
        </Description>
    ));
    const dislike = disliked.split('\n').map((paragraph, index) => (
        <Description key={index}>
            {paragraph}
        </Description>
    ));

    return (
        <TextContainer>
            <p>
                Reviewed:<br />{date}
            </p>
            <Title>{title}</Title>
            <div style={showDescriptionStyle}>
                <span>Liked:</span>
                {paragraphs}
                <span>Disliked:</span>
                {dislike}
            </div>
            {description.length > 200 && (
                <ReadMoreButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Read Less" : "Read More"}
                </ReadMoreButton>
            )}
        </TextContainer>
    );
};

export default TextHolder;

const TextContainer = styled.div`
    p {
        margin: 8px 0;
    }
    span {
        font-size: 18px;
        font-weight: bold;
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
    font-size: 18px;
`;
const Title = styled.h2`
    margin: 12px 0;
`;