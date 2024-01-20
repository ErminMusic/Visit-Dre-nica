import styled from "styled-components";
import PropTypes from "prop-types";

function Content({ content, title, titleBold }) {
    Content.propTypes = {
        title: PropTypes.string.isRequired,
        titleBold: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    return (
        <ContentHolder>
            <h1>
                {title} <span>{titleBold}</span>
            </h1>

            <Text>
                {content}
                <br />
                <br />
                {content}
                <br />
                <br />
                {content}
            </Text>
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
