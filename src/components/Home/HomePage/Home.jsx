import { block } from "million/react";
import { lazy, Suspense } from "react";
import styled from "styled-components";
const Hero= lazy(() => import("../Hero/Hero"));
const HomeFetch = lazy(() => import("./HomeFetch"));
const Home = block(() => {
    
    return (
        <Container>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <HomeFetch />
            </Suspense>
        </Container>
    );
})

export default Home;

const Container = styled.div`
    overflow: hidden;
`;
