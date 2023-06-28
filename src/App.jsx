import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Product from "./pages/Product";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
