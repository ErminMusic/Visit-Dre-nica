import styled from "styled-components";
import HeaderLogo from "../Header/HeaderLogo";
import FooterContent from "./FooterContent";
import FooterContact from "./FooterContact";

function FooterLinks() {
    const about = {
        title: "About Us",
        links: [
            "About Drežnica","About Us", "House Rules","FAQ"
        ]
    }
    const howToBook = {
        title: "How To Book",
        links: [
            "How To Book","Rooms"
        ]
    }
    const activitie = {
        title: "Activities",
        links: [
            "Activities","Nearby Attractions"
        ]
    }

    return (
        <Container>
            <HeaderLogo />
            <ContentHolder>
                <FooterContent title={about.title} links={about.links} />
                <FooterContent title={howToBook.title} links={howToBook.links} />
                <FooterContent title={activitie.title} links={activitie.links} />
                <FooterContact />
            </ContentHolder>
        </Container>
    );
}

export default FooterLinks;

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 750px) {
        width: 100%;
    }
`;
const ContentHolder = styled.div`
    width: 100%;
    padding: 8px 0 0 0;
`;