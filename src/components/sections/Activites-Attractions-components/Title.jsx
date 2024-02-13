import styled from "styled-components";

function Title() {
    return (
        <Wrap>
            <h1>Activities</h1>
        </Wrap>
    );
}

export default Title;

const Wrap = styled.div`
    background-color: #f0fff0;
    padding: 20px 0;
    border-bottom: 2.5px solid #cbe3cb;
    width: 100%;

`;
