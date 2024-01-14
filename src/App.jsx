import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutDreznica from './components/AboutDreznica'
import Strip from './components/Strip'
import RoomEquipment from './components/RoomEquipment'

function App() {

  return (
    <Container>
      
      <Header />
      <Hero />
      <AboutDreznica />
      <Strip />
      <RoomEquipment />
      
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
`