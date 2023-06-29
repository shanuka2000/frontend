import { useEffect } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const ProductRow = ({ item }) => {
  const deletItem = (id) => {};

  const editItem = (id) => {};

  const markFavourite = (id) => {};

  return (
    <Container>
      <ItemBlock flx="1">
        <ItemText opct="0.5">{item.sku}</ItemText>
      </ItemBlock>
      <ItemBlock flx="1">
        <ItemImage
          src={"http://localhost:9000/" + item.images[0]}
          loading="lazy"
        />
      </ItemBlock>
      <ItemBlock flx="2">
        <ItemText opct="1">{item.productName}</ItemText>
      </ItemBlock>
      <ItemBlock flx="1">
        <ItemText opct="1">{item.quantity}</ItemText>
      </ItemBlock>
      <ItemBlock flx="1">
        <BtnWrapper>
          <Button onClick={deletItem(item._id)}>
            <DeleteIcon />
          </Button>
          <Button onClick={editItem(item._id)}>
            <EditIcon />
          </Button>
          <Button onClick={markFavourite(item._id)}>
            <StarRoundedIcon />
          </Button>
        </BtnWrapper>
      </ItemBlock>
    </Container>
  );
};

export default ProductRow;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #969191;
  }
`;

const ItemBlock = styled.div`
  flex: ${(props) => props.flx};

  display: flex;
`;

const ItemText = styled.p`
  color: #162427 !important;
  font-weight: 500;
  opacity: ${(props) => props.opct};
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const BtnWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #001eb9;
  border: none;
  margin: 0 5px;
  cursor: pointer;
`;
