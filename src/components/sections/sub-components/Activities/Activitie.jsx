import styled from "styled-components";
import PropTypes from "prop-types";

function Activitie({ list }) {
    Activitie.propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape({
                alter: PropTypes.string.isRequired,
                image: PropTypes.node.isRequired,
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    return (
        <>
            {list.map((item, index) => (
                <Container key={index}>
                    <Image alt={item.alter} src={item.image} loading="lazy" />
                    <ContentHolder>
                        <h2>{item.name}</h2>
                    </ContentHolder>
                    <Button href={item.link}>
                        <span>{item.name}</span>
                        LEARN MORE
                    </Button>
                </Container>
            ))}
        </>
    );
}

export default Activitie;

const Container = styled.div`
    width: 45%;
    color: #525252;
    margin: 12px 0 36px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
const Image = styled.img`
    width: 70%;
    height: 100%;
    border-radius: 16px;
    @media (max-width: 1100px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 900px) {
        width: 90%;
        height: 90%;
    }
    @media (max-width: 700px) {
        width: 90%;
        height: 90%;
    }
`;
const ContentHolder = styled.div`
    margin: 12px 0;
`;
const Button = styled.a`
    text-decoration: none;
    border-radius: 10px;
    background-color: rgb(80, 125, 127);
    text-align: center;
    width: 70%;
    padding: 16px 0px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    &:hover {
        transform: scale(1.05);
        transition: 250ms;
    }
    @media (max-width: 1100px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 900px) {
        width: 90%;
        height: 90%;
    }
    &[aria-label] {
        position: relative;
    }
    span {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`;