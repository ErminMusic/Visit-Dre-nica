import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('../sections/Hero'));
const AboutDreznica = lazy(() => import('../sections/AboutDreznica'));
const RoomEquipment = lazy(() => import('../sections/RoomEquipment'));
const Rooms = lazy(() => import('../sections/Rooms'));
const Strip = lazy(() => import('../sections/Strip'));
const Activities = lazy(() => import('../sections/Activities'));
const Review = lazy(() => import('../sections/Review'));

function Home() {
  return (
    <> 
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutDreznica />
        <Strip />
        <RoomEquipment />
        <Rooms />
        <Activities />
        <Review />
      </Suspense>
    </>
  )
}

export default Home