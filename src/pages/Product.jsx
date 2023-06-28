import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Product = () => {
  return (
    <Container>
      <Navigation />
      <Header title="Products" />
      <ProductList />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
