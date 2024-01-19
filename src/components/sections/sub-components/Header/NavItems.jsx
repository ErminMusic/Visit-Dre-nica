function NavItems() {
    let activities = ["Our Activities", "Nearby Attractions"];
    let about = ["About Drežnica", "About Us", "House Rules"];

    const title = {
        home: "Home",
        howTo: "How To Book",
        FAQ: "FAQ",
    };

    return (
        <Container>
            <NavBarItem>
                <span>
                    <a href="/">{title.home}</a>
                </span>
            </NavBarItem>

            <NavBarItem>
                <Dropdown title="About Us" options={about} />
            </NavBarItem>

            <NavBarItem>
                <Dropdown title="Activities" options={activities} />
            </NavBarItem>

            <NavBarItem>
                <span>
                    <a href="/How To Book">{title.howTo}</a>
                </span>
            </NavBarItem>

            <NavBarItem>
                <span>
                    <a href="/FAQ">{title.FAQ}</a>
                </span>
            </NavBarItem>
        </Container>
    );
}

export default NavItems;

import styled from "styled-components";
import Dropdown from "./Dropdown";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    z-index: 100;

    @media (max-width: 990px) {
        justify-content: space-between;
        padding: 0 12px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: start;
        padding: 8px 0;
        position: relative;
    }
`;

const NavBarItem = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    @media (max-width: 850px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: relative;

        &::after {
            content: "";
            height: 2.5px;
            background: #ffffff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -4px;
            opacity: 0;
            transform: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }

    a {
        text-decoration: none;
        color: white;
        z-index: 1;
    }
`;
