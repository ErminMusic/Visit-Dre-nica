import PropTypes from "prop-types";
import styled from "styled-components";

function Body({ content }) {
    return (
        <>
            {content.map((item, index) => (
                <Container key={index} $isReversed={!item.side}>
                    <Content $isReversed={!item.side}>
                        <ImageHolder>
                            <Image src={item.image} alt={item.alter} />
                        </ImageHolder>
                        <TextHolder>
                            <h1 id={item.name}>{item.name}</h1>
                            <p>{item.description}</p>
                        </TextHolder>
                    </Content>
                </Container>
            ))}
        </>
    );
}

Body.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            alter: PropTypes.string.isRequired,
            side: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Body;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ $isReversed }) =>
        $isReversed ? "#f8f5df" : "#f0fff0"};
`;

const Content = styled.div`
    width: 80%;
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ $isReversed }) =>
        $isReversed ? "row-reverse" : "row"};
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;

const ImageHolder = styled.div`
    width: 35%;
    min-width: 300px;
    padding: 8px;

    @media (max-width: 850px) {
        min-width: 250px;
    }
    @media (max-width: 300px) {
        min-width: 200px;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const TextHolder = styled.div`
    margin: 24px;
    width: 60%;
    
    h1 {
        padding: 12px 0 16px 0;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
`;