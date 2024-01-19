import PropTypes from "prop-types";
import styled from "styled-components";

const Person = ({ profileImage, name, countryName, flag, score }) => {
    return (
        <Container>
            <PersonHolder>
                <IconHolder>
                    <Image alt={name} src={profileImage} />
                </IconHolder>
                <PersonInfo>
                    <span>{name}</span>
                    <div>
                        <img src={flag} alt={countryName} />
                        {countryName}
                    </div>
                </PersonInfo>
            </PersonHolder>
            <Score>
                <p>{score}</p>
            </Score>
        </Container>
    );
};

Person.propTypes = {
    profileImage: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    countryName: PropTypes.node.isRequired,
    flag: PropTypes.node.isRequired,
    score: PropTypes.string.isRequired,
};

const Container = styled.div`
    display: flex;
    padding: 8px;
`;

const PersonHolder = styled.div`
    display: flex;
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 0 12px 0 0;

    span {
        font-weight: bold;
    }
`;

const Image = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

const PersonInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        font-weight: bold;
    }

    div {
        display: flex;
        margin: 8px 0;

        img {
            width: 20px;
            height: 20px;
            margin: 0 6px 0 0;
        }
    }
`;

const Score = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 10px 10px 10px 0;
    background-color: #8fbc8f;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    font-weight: bold;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
        opacity: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
`;

export default Person;
