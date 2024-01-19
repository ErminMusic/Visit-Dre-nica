import styled from "styled-components";

function TextHolder() {
    return (
        <Container>
            <Headline>
                Visit <span>Drežnica</span>
            </Headline>
            <SubHeadline>
                A Hidden Gem in <br /> Bosnia & Herzegovina
            </SubHeadline>
        </Container>
    );
}

export default TextHolder;

const Container = styled.div`
    max-height: fit-content;
`;

const Headline = styled.h1`
    font-size: 56px;
    font-weight: bold;
    text-transform: uppercase;

    span {
        color: #f0fff0;
    }
`;

const SubHeadline = styled.h2`
    font-size: 32px;
    margin: 16px 0 20px 0;
    font-weight: normal;
`;
