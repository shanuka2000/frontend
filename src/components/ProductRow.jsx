import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import axios from "../axios.js";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productsSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfirmDelete from "./ConfirmDelete.jsx";

const ProductRow = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );
  const products = useSelector((state) => state.product.value);

  useEffect(() => {
    const existingArr = localStorage.getItem("favourites");

    if (existingArr === null) {
      const favouriteProducts = products.map((item) => {
        return {
          _id: item._id,
          favourite: false,
        };
      });

      const updatedProductsString = JSON.stringify(favouriteProducts);

      localStorage.setItem("favourites", updatedProductsString);
    }
  }, []);

  const deletItem = async () => {
    try {
      const itemId = item._id;
      let text =
        "Are you sure!\nYou will not be able to undo this action if you proceed!";
      if (confirm(text) == true) {
        const res = await axios.delete("/remove/" + itemId);
        console.log(res);

        dispatch(removeProduct(itemId));
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  const editItem = () => {
    navigate("/edit/" + item._id);
  };

  // Needs fixing
  const markFavourite = () => {
    const updatedProducts = fav.map((product) => {
      if (product._id === item._id) {
        return {
          ...product,
          favourite: true,
        };
      }
      return product;
    });

    setFav(updatedProducts);
    localStorage.setItem("favourites", JSON.stringify(updatedProducts));
  };

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
          <Button onClick={deletItem}>
            <DeleteIcon />
          </Button>
          <Button onClick={editItem}>
            <EditIcon />
          </Button>
          <Button onClick={markFavourite}>
            <StarBorderRoundedIcon />
          </Button>
        </BtnWrapper>
      </ItemBlock>
      <ConfirmDelete />
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
  border-radius: 10px;
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
