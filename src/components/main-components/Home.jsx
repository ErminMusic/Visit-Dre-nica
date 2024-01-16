import React from 'react';

const Hero = React.lazy(() => import('../sections/Hero'));
const AboutDreznica = React.lazy(() => import('../sections/AboutDreznica'));
const RoomEquipment = React.lazy(() => import('../sections/RoomEquipment'));
const Rooms = React.lazy(() => import('../sections/Rooms'));
const Strip = React.lazy(() => import('../sections/Strip'));

function Home() {
  return (
    <>
      <Hero />
      <AboutDreznica />
      <Strip />
      <RoomEquipment />
      <Rooms />
    </>
  )
}

export default Home