import styled from "styled-components";
import ResultListItem from "./ResultListItem";
import { useSelector } from "react-redux";

const ResultList = () => {
  // const result = [
  //   {
  //     id: 1,
  //     sku: "#CA25",
  //     image: "https://i.ibb.co/Jzb2p5N/product-img.png",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.",
  //     product_name: "Item 01",
  //     qty: 10,
  //   },
  //   {
  //     id: 2,
  //     sku: "#CA34",
  //     image: "https://i.ibb.co/cNZ3gq0/product-img-1.png",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.",
  //     product_name: "Item 02",
  //     qty: 5,
  //   },
  //   {
  //     id: 3,
  //     sku: "#CA34",
  //     image: "https://i.ibb.co/xsYxzTS/product-img-2.png",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.",
  //     product_name: "Item 03",
  //     qty: 5,
  //   },
  // ];

  const result = useSelector((state) => state.search.value);

  return (
    <Container>
      {result.map((item) => (
        <ResultListItem key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default ResultList;

const Container = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
