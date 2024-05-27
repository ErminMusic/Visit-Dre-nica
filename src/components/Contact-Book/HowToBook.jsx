import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() => import("./Body"));
import HowToBookBg from "../../assets/Background/HowToBookBg.webp";
import HowToBookSide from "../../assets/General/HowToBookSide.webp";
import HowToBookPhone from "../../assets/Background/HowToBookPhone.webp";

function HowToBook() {
    const content = {
        title: "How To Book",
        text: "If you are interested in visiting Drežnica, you can book a room trough the Booking.com app:",
        showButton: true,
        showSecondText: true,
        secondText: "Or, send us a message here:",
        backgroundImg: HowToBookBg,
        sideImg: HowToBookSide,
        backgroundImgPhone: HowToBookPhone,
    };

    return (
        <Container>
            <Body content={content} />
        </Container>
    );
}

export default HowToBook;

const Container = styled.div``;
