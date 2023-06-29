import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import axios from "../axios.js";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/all");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();

    console.log(products);
  }, []);

  return (
    <Container>
      <Navigation />
      <Header title="Products" actionsHidden={false} />
      <ProductList products={products} />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
