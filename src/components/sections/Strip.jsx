import styled from "styled-components";
import StripIcons from "./sub-components/Strip/StripIcons";

function Strip() {
    return (
        <Wrap>
            <Container>
                <StripIcons />
            </Container>
        </Wrap>
    );
}

export default Strip;

const Wrap = styled.div`
    width: 100%;
    background-color: #f8f5df;
    display: flex;
    justify-content: center;
    padding: 36px 0;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 850px) {
        width: 100%;
    }
`;
