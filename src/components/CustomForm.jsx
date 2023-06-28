import styled from "styled-components";

const CustomForm = () => {
  return (
    <Container>
      <FormRow>
        <FormInputWrapper>
          <Label>SKU</Label>
          <Input />
        </FormInputWrapper>
      </FormRow>
      <FormRow>
        <FormInputWrapper>
          <Label>Name</Label>
          <Input />
        </FormInputWrapper>
        <FormInputWrapper>
          <Label>QTY</Label>
          <Input />
        </FormInputWrapper>
      </FormRow>
      <FormRow flxdir="true">
        <Label width="max-content">Product Description</Label>
        <SmallText>A small description about the product</SmallText>
        <TextArea></TextArea>
      </FormRow>
      <FormRow>
        <RowLeft>
          <Label width="max-content">Product Images</Label>
          <SmallText>
            JPEG, PNG, SVG or GIF <br />
            (Maximum file size 50MB)
          </SmallText>
        </RowLeft>
        <RowRight>
          <SimpleButton>Add Images</SimpleButton>
        </RowRight>
      </FormRow>
      <FormRow jstfy="end">
        <Button>Add product</Button>
      </FormRow>
    </Container>
  );
};

export default CustomForm;

const Container = styled.form`
  padding: 10px;
  width: 80%;
  margin-left: 10%;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: ${(props) => props.jstfy && "flex-end"};
  flex-direction: ${(props) => props.flxdir && "column"};
  padding: 15px 10px;
  margin-top: 10px;
`;

const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Label = styled.p`
  font-weight: 500;
  margin-right: 10px;
  font-size: 15px;
  width: ${(props) => (props.width ? "max-content" : "10%")};
`;

const Input = styled.input`
  padding: 5px;
  width: 75%;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: 500;
  background-color: #f7f7f7;
`;

const SmallText = styled.p`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 94%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  outline: none;
  resize: none;
  background-color: #f7f7f7;
`;

const RowLeft = styled.div`
  flex: 1;
`;

const RowRight = styled.div`
  flex: 4;
`;

const SimpleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #001eb9;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 3%;
  background-color: #001eb9;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  margin-right: 5%;
`;
