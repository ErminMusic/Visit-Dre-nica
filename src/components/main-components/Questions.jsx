import styled from "styled-components";
import Title from "../sections/FAQ-components/Title";
import QuestionHolder from "../sections/FAQ-components/QuestionHolder";
import QuestionNavbar from "../sections/FAQ-components/QuestionNavbar";

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
        "House Rules",
        "Rent A Boat",
        "Swimming",
        "Location",
        "Hiking",
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
