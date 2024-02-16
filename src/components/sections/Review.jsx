import styled from "styled-components";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
const ReviewSlider = lazy(() => import("./sub-components/Review/ReviewSlider"));

function Review({ guestInfo }) {
    Review.propTypes = {
        guestInfo: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                profileImage: PropTypes.node.isRequired,
                countryName: PropTypes.node.isRequired,
                flag: PropTypes.node.isRequired,
                score: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                disliked: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    return (
        <Wrap>
            <TitleHolder>
                <h2>See what our guests loved the most:</h2>
            </TitleHolder>
            <Suspense fallback={<div>Loading...</div>}>
                <ReviewSlider list={guestInfo} />
            </Suspense>
        </Wrap>
    );
}

export default Review;

const Wrap = styled.div`
    background-color: #f8f5df;
    width: 100%;
    color: #525252;
    padding: 16px 0 44px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`;
const TitleHolder = styled.div`
    width: 80%;
    h2 {
        font-size: 28px;
    }
`;
