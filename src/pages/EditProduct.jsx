import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import CustomForm from "../components/CustomForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Container>
      <Navigation />
      <Header title="products" subTitle="Edit product" actionsHidden={true} />
      <CustomForm />
    </Container>
  );
};

export default EditProduct;

const Container = styled.div``;
