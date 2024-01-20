import styled from "styled-components";
import { GaleryImage } from "../data/GaleryImages";
import GalerySlider from "./sub-components/Galery/GalerySlider";

function Galery() {
    return (
        <Wrap>


            <GalerySlider images={GaleryImage} />
        </Wrap>
    );
}

export default Galery;

const Wrap = styled.div`
    width: 100%;
    background-color: #f8f5df;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 36px 0;
`;


