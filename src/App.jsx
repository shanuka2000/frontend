import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Product from "./pages/Product";
import FavouritProducts from "./pages/FavouritProducts";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/results" element={<SearchResult />} />
          <Route path="/favourite" element={<FavouritProducts />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
