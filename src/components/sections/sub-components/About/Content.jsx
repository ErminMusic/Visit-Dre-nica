import styled from "styled-components";
import PropTypes from "prop-types";

function Content({ content, title, titleBold }) {
    Content.propTypes = {
        title: PropTypes.string.isRequired,
        titleBold: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                __html: PropTypes.string.isRequired,
            }),
            PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
        ]).isRequired,
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return content.map((item, index) => (
                <Paragraph key={index} dangerouslySetInnerHTML={item} />
            ));
        } else if (typeof content === "object" && content.__html) {
            return <Paragraph dangerouslySetInnerHTML={content} />;
        } else if (typeof content === "string") {
            const paragraphs = content
                .split("\n")
                .map((paragraph, index) => (
                    <Paragraph key={index}>{paragraph}</Paragraph>
                ));
            return paragraphs;
        }
    };
    return (
        <ContentHolder>
            <h1>
                <span>{titleBold}</span>
                {title}
            </h1>
            {renderContent()}
        </ContentHolder>
    );
}

export default Content;

const ContentHolder = styled.div`
    width: 45%;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        padding:  0 0 24px 0;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Paragraph = styled.p`
    margin: 16px 0 0 0;
`;
