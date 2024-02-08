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
                    <a href={`${contact.igLink}`}>
                        <div>
                            <CustomIG />
                            Instagram
                        </div>
                    </a>
                </LinkHolder>
                <LinkHolder>
                    <a href={`${contact.fbLink}`}>
                        <div>
                            <CustomFB />
                            Facebook
                        </div>
                    </a>
                </LinkHolder>
                <LinkHolder>
                    <p>
                        <div>
                            <CustomMail />
                            {contact.email}
                        </div>
                    </p>
                </LinkHolder>
                <LinkHolder>
                    <p>
                        <div>
                            <CustomPhone />
                            {contact.phone}
                        </div>
                    </p>
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
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomFB = styled(FacebookIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomMail = styled(EmailIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomPhone = styled(PhoneIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
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
    a,
    p {
        text-decoration: none;
        color: white;
        text-align: center;
        font-size: 16px;
        div {
            display: flex;
            align-items: center;
        }
    }
`;
