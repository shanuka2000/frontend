import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import CustomForm from "../components/CustomForm";

const AddNewProduct = () => {
  return (
    <Container>
      <Navigation />
      <Header title="Products" subTitle="Add new product" />
      <CustomForm />
    </Container>
  );
};

export default AddNewProduct;

const Container = styled.div``;
