import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import CustomForm from "../components/CustomForm";

const EditProduct = () => {
  return (
    <Container>
      <Navigation />
      <Header title="products" subTitle="Edit product" actionsHidden={true} />
      <CustomForm formType="edit" isEditable={true} />
    </Container>
  );
};

export default EditProduct;

const Container = styled.div``;
