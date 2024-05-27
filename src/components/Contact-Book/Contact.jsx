import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() => import("./Body"));
import ContactBg from "../../assets/Background/ContactBg.webp";
import ContactSide from "../../assets/General/ContactSide.webp";
import ContactPhone from "../../assets/Background/ContactPhone.webp";

function Contact() {
    const content = {
        title: "Contact Us",
        text: "If you still have questions about Drežnica, feel free to contact us here and we’ll respond within 48 hours: ",
        showButton: false,
        showSecondText: false,
        secondText: "",
        backgroundImg: ContactBg,
        sideImg: ContactSide,
        backgroundImgPhone: ContactPhone,
    };

    return (
        <Container>
            <Body content={content} />
        </Container>
    );
}

export default Contact;

const Container = styled.div``;
