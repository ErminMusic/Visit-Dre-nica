import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function FooterContact() {
    const contact = {
        title: "Contact Us",
        phone: "+387 616 281 58",
        email: "visitdreznica@gmail.com",
        social: "Visit Drežnica",
        igLink: "https://www.instagram.com/visitdreznica/",
        fbLink: "https://www.facebook.com/visitdreznica",
    };

    return (
        <Container>
            <Title>{contact.title}</Title>
            <Links>
                <LinkHolder>
                    <CustomIG />
                    <a href={`${contact.igLink}`}>Instagram</a>
                </LinkHolder>
                <LinkHolder>
                    <CustomFB />
                    <a href={`${contact.fbLink}`}>FaceBook</a>
                </LinkHolder>
                <LinkHolder>
                    <CustomMail />
                    <p>{contact.email}</p>
                </LinkHolder>
                <LinkHolder>
                    <CustomPhone />
                    <p>{contact.phone}</p>
                </LinkHolder>
            </Links>
        </Container>
    );
}

export default FooterContact;

const Container = styled.div`
    padding: 12px 0;
`;
const CustomIG = styled(InstagramIcon)`
    &.MuiSvgIcon-root {
        font-size: 28px;
    }
`;
const CustomFB = styled(FacebookIcon)`
    &.MuiSvgIcon-root {
        font-size: 28px;
    }
`;
const CustomMail = styled(EmailIcon)`
    &.MuiSvgIcon-root {
        font-size: 28px;
    }
`;
const CustomPhone = styled(PhoneIcon)`
    &.MuiSvgIcon-root {
        font-size: 28px;
    }
`;
const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 4px 0;
`;
const Links = styled.div`
    display: flex;
    flex-direction: column;
`;
const LinkHolder = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    a,p {
        text-decoration: none;
        color: white;
        margin-left: 8px;
        font-size: 16px;
    }
`;