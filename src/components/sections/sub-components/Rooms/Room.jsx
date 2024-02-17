import styled from "styled-components";
import BedIcon from "../../../../assets/Bed.webp";
import PeopleIcon from "../../../../assets/People.webp";
import SizeIcon from "../../../../assets/Size.webp";
import ViewIcon from "../../../../assets/View.webp";
import BathIcon from "../../../../assets/Bath.webp";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const IconSection = lazy(() => import("./IconSection"));
const Carousel = lazy(() => import("./Carousel"));
const RoomButtons = lazy(() => import("./RoomButtons"));

const Room = ({ roomContent }) => {
    Room.propTypes = {
        roomContent: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                people: PropTypes.string.isRequired,
                size: PropTypes.string.isRequired,
                bed: PropTypes.string.isRequired,
                view: PropTypes.string.isRequired,
                bathroom: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                image: PropTypes.arrayOf(PropTypes.node),
            })
        ),
    };

    return (
        <>
            {roomContent.map((item, index) => (
                <Container key={index}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Carousel image={item.images} />
                    </Suspense>
                    <ContentHolder>
                        <Content>
                            <h3>{item.title}</h3>
                            <RoomDescription>
                                <p>{item.description}</p>
                            </RoomDescription>
                            <IconHolder>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <IconSection
                                        iconSrc={PeopleIcon}
                                        text={item.people}
                                    />
                                    <IconSection
                                        iconSrc={SizeIcon}
                                        text={item.size}
                                    />
                                    <IconSection
                                        iconSrc={BedIcon}
                                        text={item.bed}
                                    />
                                    <IconSection
                                        iconSrc={ViewIcon}
                                        text={item.view}
                                    />
                                    <IconSection
                                        iconSrc={BathIcon}
                                        text={item.bathroom}
                                    />
                                </Suspense>
                            </IconHolder>
                            <Suspense fallback={<div>Loading...</div>}>
                                <RoomButtons />
                            </Suspense>
                        </Content>
                    </ContentHolder>
                </Container>
            ))}
        </>
    );
};

export default Room;

const Container = styled.div`
    width: 48%;
    margin: 18px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    margin: 20px 0;
    width: 90%;
    p {
        margin: 8px 0;
    }
    h3 {
        font-size: 18px;
    }
`;
// const Title = styled.p``;
const RoomDescription = styled.div`
    min-height: 160px;
    @media (min-width: 1101px) {
        min-height: 100px;
    }
    @media (max-width: 1100px) {
        min-height: 130px;
    }
    @media (max-width: 950px) {
        min-height: 150px;
    }
    @media (max-width: 700px) {
        min-height: auto;
    }
`;
const IconHolder = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
`;
