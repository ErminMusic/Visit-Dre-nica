import styled from "styled-components";
import PropTypes from "prop-types";

function Content({ content, title, titleBold }) {
    Content.propTypes = {
        title: PropTypes.string.isRequired,
        titleBold: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };
    const renderContent = () => {
        const paragraphs = content.split("\n").map((paragraph, index) => {
            if (paragraph.includes("<strong>") && paragraph.includes("</strong>")) {
                const parts = paragraph.split(/<\/?strong>/);
                return (
                    <Text key={index}>
                        {parts.map((part, partIndex) => {
                            return partIndex % 2 === 0 ? (
                                <span key={partIndex}>{part}</span>
                            ) : (
                                <strong key={partIndex}>{part}</strong>
                            );
                        })}
                    </Text>
                );
            } else {
                return <Text key={index}>{paragraph}</Text>;
            }
        });
        return paragraphs;
    };
    return (
        <ContentHolder>
            <h1>
                {title} <span>{titleBold}</span>
            </h1>
            {renderContent()}
        </ContentHolder>
    );
}

export default Content;

const ContentHolder = styled.div`
    width: 45%;
    padding: 16px 24px;
    h1 {
        font-weight: normal;

        span {
            font-weight: bold;
        }
    }
    @media (max-width: 1100px) {
        width: 50%;
    }
    @media (max-width: 700px) {
        width: 90%;
        padding: 24px 0;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`;
const Text = styled.p`
    margin: 12px 0 0 0;
`;