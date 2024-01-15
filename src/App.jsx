import styled from 'styled-components'
import './App.css'
import Header from './components/sections/Header'
import Home from './components/main-components/Home'

function App() {

  return (
    <Container>
      
      <Header />
      <Home />
      
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
`