import styled from "styled-components";
import Title from "./Title";
import { lazy } from "react";
const QuestionHolder = lazy(() => import("./QuestionHolder"));
const QuestionNavbar = lazy(() => import("./Navbar"));

function Questions() {
    const HouseRules = {
        title: "House Rules",
        questionsAndAnswers: [
            {
                question: "Are pets allowed?",
                answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, assumenda? Voluptates delectus odio dolorum deserunt sint voluptate expedita laborum incidunt, fugiat aspernatur ad enim accusamus, molestiae quasi rerum necessitatibus cupiditate!",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
        ],
    };
    const RentABoat = {
        title: "Rent A Boat",
        questionsAndAnswers: [
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
        ],
    };
    const Hiking = {
        title: "Hiking",
        questionsAndAnswers: [
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
        ],
    };
    const Location = {
        title: "Location",
        questionsAndAnswers: [
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
        ],
    };
    const Swimming = {
        title: "Swimming",
        questionsAndAnswers: [
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed in the facility",
            },
            {
                question: "Another question?",
                answer: "Answer to another question",
            },
        ],
    };
    const Categories = [
        {
            name: "House Rules",
            link: "House Rules",
        },
        {
            name: "Rent A Boat",
            link: "Rent A Boat",
        },
        {
            name: "Rent A Bike",
            link: "Rent A Bike",
        },
        {
            name: "Location",
            link: "Location",
        },
        {
            name: "Other",
            link: "Other",
        },
    ];
    return (
        <Container>
            <Title />
            <QuestionNavbar category={Categories} />
            <QuestionHolder
                title={HouseRules.title}
                questions={HouseRules.questionsAndAnswers}
            />
            <QuestionHolder
                title={RentABoat.title}
                questions={RentABoat.questionsAndAnswers}
            />
            <QuestionHolder
                title={Location.title}
                questions={Location.questionsAndAnswers}
            />
            <QuestionHolder
                title={Swimming.title}
                questions={Swimming.questionsAndAnswers}
            />
            <QuestionHolder
                title={Hiking.title}
                questions={Hiking.questionsAndAnswers}
            />
            <Contact>
                <span>
                    If you still have questions, go here:{" "}
                    <a href="/Contact">Contact Us</a>
                </span>
            </Contact>
        </Container>
    );
}

export default Questions;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #525252;
    background: #f8f5df;
`;

const Contact = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 18px;
    padding: 16px 0;
    a {
        text-decoration: none;
        color: #525252;
        text-decoration: underline;
    }
    @media (max-width: 850px) {
        width: 95%;
    }
`;
