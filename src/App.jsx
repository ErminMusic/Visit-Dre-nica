import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutDreznica from './components/AboutDreznica'

function App() {

  return (
    <Container>
      
      <Header />
      <Hero />
      <AboutDreznica />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
`