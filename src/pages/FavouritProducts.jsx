import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const FavouritProducts = () => {
  return (
    <Container>
      <Navigation />
      <Header title="Favourite Products" actionsHidden={false} />
      <ProductList />
    </Container>
  );
};

export default FavouritProducts;

const Container = styled.div``;
