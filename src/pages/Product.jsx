import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import axios from "../axios.js";
import { useDispatch } from "react-redux";
import { setProducts } from "../features/productsSlice";

const Product = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/all");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Navigation />
      <Header title="Products" actionsHidden={false} />
      <ProductList />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
