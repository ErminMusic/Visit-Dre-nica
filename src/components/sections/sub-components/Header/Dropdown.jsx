import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";

function Dropdown({ title, options }) {
    Dropdown.propTypes = {
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    const handleItemClick = (item) => {
        if (title === "About Us" || item === "About Drežnica") {
            window.location.href = `/#${item.replace(/\s+/g, "%20")}`;
        } else if (title === "Activities") {
            const url = `/${item.replace(/\s+/g, "%20")}`;
            window.location.href = url;
        }
    };

    return (
        <Container>
            <Wrapp>
                <span>{title}</span>
                <CustomArrow />
            </Wrapp>
            <Drop>
                {options.map((item, index) => (
                    <DropOptions
                        href={`#${item}`}
                        key={index}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </DropOptions>
                ))}
            </Drop>
        </Container>
    );
}
const CustomArrow = styled(KeyboardArrowDownIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
    }
`;
const Drop = styled.div`
    background: #4b7376;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 200px;
    top: 100%;
    margin: 5px 0;
    z-index: 100;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    @media (max-width: 850px) {
        top: 90%;
        left: 0;
        margin: 0;
        position: relative;
        width: 100%;
        height: 50%;
        display: none;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1000;
    &:hover {
        ${Drop} {
            visibility: visible;
            display: flex;
            opacity: 1;
            z-index: 100;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
    }
    @media (max-width: 850px) {
        background: #4b7376;
    }
`;
const DropOptions = styled.a`
    padding: 20px 15px;
    text-decoration: none;
    color: white;
    background: #4b7376;
    z-index: 500;
    border-bottom: 1px solid rgb(61, 100, 102);
`;
const Wrapp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    @media (max-width: 850px) {
        justify-content: start;
    }
`;

export default Dropdown;
