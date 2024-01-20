import { useEffect, useState } from "react";
import styled from "styled-components";

function Map() {
    const [link, setLink] = useState("");

    const getMap = async () => {
        setTimeout(() => {
            setLink(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5786.303317160787!2d17.731311646383094!3d43.52003006901677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b496843754719%3A0xc078175d63de19d1!2sDreznica%20hostel!5e0!3m2!1sbs!2sba!4v1705777282591!5m2!1sbs!2sba",
                { passive: "true" }
            );
        }, 3000);
    };

    useEffect(() => {
        getMap();
    }, []);

    return (
        <StyledMap>
            <Location
                title="Location Map"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                src={link}
            />
        </StyledMap>
    );
}

export default Map;

const StyledMap = styled.div`
    flex: 1;
`;
const Location = styled.iframe`
    width: 100%;
    height: 100%;
    min-height: 400px;
    @media (max-width: 850px) {
        margin: 8px 0 0 0;
        min-height: 600px;
    }
    @media (max-width: 600px) {
        min-height: 400px;
    }
`;