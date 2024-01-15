import AboutDreznica from "../sections/AboutDreznica"
import Hero from "../sections/Hero"
import RoomEquipment from "../sections/RoomEquipment"
import Rooms from "../sections/Rooms"
import Strip from "../sections/Strip"

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