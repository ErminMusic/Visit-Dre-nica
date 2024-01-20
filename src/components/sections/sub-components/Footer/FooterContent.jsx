import styled from "@emotion/styled";
import PropTypes from "prop-types";

function FooterContent({ title, links }) {
    FooterContent.propTypes = {
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.string),
    };

    return (
        <Container>
            <Title>{title}</Title>
            {links.map((item, index) => (
                <Links key={index}>
                    <CustomLink href={item}>{item}</CustomLink>
                </Links>
            ))}
        </Container>
    );
}

export default FooterContent;

const Container = styled.div`
    padding: 12px 0;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 4px 0;
`;

const Links = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

const CustomLink = styled.a`
    text-decoration: none;
    color: white;
    padding: 10px 0;
    font-size: 16px; 
`;
