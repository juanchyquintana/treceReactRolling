import { Container } from "react-bootstrap";
import AppClima from "./components/AppClima";
import Header from "./components/Header";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {

  return (
    <ClimaProvider> 
      <Header />
      
      <Container>
        <AppClima />
      </Container>
    </ClimaProvider>
  )
}

export default App
