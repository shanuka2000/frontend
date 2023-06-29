import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CustomForm = ({ formType, isEditable }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [sku, setSku] = useState("");
  const [qty, setQty] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editable, setEditable] = useState(isEditable);
  const { id } = useParams();

  const getProductByID = async () => {
    try {
      const response = await axios.get("/find/" + id);
      setName(response.data.productName);
      setSku(response.data.sku);
      setQty(response.data.quantity);
      setDescription(response.data.productDescription);
      setImageUrl([...response.data.images]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (isEditable) {
      getProductByID();
    }
  }, []);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    setSelectedFiles(fileArray);
    setEditable(!editable);
  };

  const handleInputSku = (event) => {
    // Needs Optimization
    const text = event.target.value;
    setSku(text);
  };

  const handleInputName = (event) => {
    // Needs Optimization
    const text = event.target.value;
    setName(text);
  };

  const handleInputQty = (event) => {
    // Needs Optimization
    const text = event.target.value;
    setQty(text);
  };

  const handleInputDesc = (event) => {
    // Needs Optimization
    const text = event.target.value;
    setDescription(text);
  };

  const submitProduct = async (event) => {
    event.preventDefault();

    if (formType === "add") {
      const formData = new FormData();
      formData.append("productName", name);
      formData.append("productDescription", description);
      formData.append("quantity", qty);
      formData.append("sku", sku);
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images", selectedFiles[i]);
      }

      try {
        const res = await axios.post("/new", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Product Saved:", res.data);
        alert("Product Saved!");
        setSku("");
        setName("");
        setQty("");
        setDescription("");
        setSelectedFiles([]);
      } catch (error) {
        alert("Error while saving product");
        console.error("Error while saving product", error);
      }
    }
  };

  return (
    <Container>
      <FormRow>
        <FormInputWrapper>
          <Label>SKU</Label>
          <Input type="text" value={sku} onChange={handleInputSku} />
        </FormInputWrapper>
      </FormRow>
      <FormRow>
        <FormInputWrapper>
          <Label>Name</Label>
          <Input type="text" value={name} onChange={handleInputName} />
        </FormInputWrapper>
        <FormInputWrapper>
          <Label>QTY</Label>
          <Input type="number" value={qty} onChange={handleInputQty} />
        </FormInputWrapper>
      </FormRow>
      <FormRow flxdir="true">
        <Label width="max-content">Product Description</Label>
        <SmallText>A small description about the product</SmallText>
        <TextArea value={description} onChange={handleInputDesc}></TextArea>
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
          <PreviewContainer>
            {editable ? (
              <>
                {imageUrl.map((item, index) => (
                  <Image key={index} src={"http://localhost:9000/" + item} />
                ))}
              </>
            ) : (
              <>
                {selectedFiles.map((file, index) => (
                  <Image
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                  />
                ))}
              </>
            )}
          </PreviewContainer>
          <CustomInputLabel>
            <LabelText>
              {selectedFiles.length === 0 && formType !== "edit"
                ? "Add Images"
                : "Edit Images"}
            </LabelText>
            <InputBtn
              type="file"
              accept=".jpg, .jpeg, .png, .svg, .gif"
              multiple
              onChange={handleFileChange}
            />
          </CustomInputLabel>
        </RowRight>
      </FormRow>
      <FormRow jstfy="end">
        <Button onClick={submitProduct}>
          {formType === "edit" ? "Save Cahnges" : "Add Product"}
        </Button>
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

  display: flex;
`;

const PreviewContainer = styled.div``;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  border-radius: 10px;
`;

const CustomInputLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  color: #001eb9;
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 10px;
`;

const LabelText = styled.p``;

const InputBtn = styled.input`
  /* background-color: transparent;
  border: none;
  color: #001eb9;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer; */

  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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
