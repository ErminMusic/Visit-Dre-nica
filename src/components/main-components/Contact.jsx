import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() =>import("../sections/Contact-Book-components/Body"));
import ContactBg from "../../assets/ContactBg.webp";
import ContactSide from "../../assets/ContactSide.webp";
import ContactPhone from "../../assets/ContactPhone.webp";
import { block } from "million/react";

const Contact= block(() => {
    const content = {
        title: "Contact Us",
        text: "If you still have questions about Drežnica, feel free to contact us here and we’ll respond to your question within 48 hours: ",
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
})

export default Contact;

const Container = styled.div``;
