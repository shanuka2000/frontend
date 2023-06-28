import styled from "styled-components";
import TableHeading from "./TableHeading";
import ProductRow from "./ProductRow";

const ProductList = () => {
  const heading = [
    {
      id: 1,
      flxVal: 1,
      title: "Sku",
    },
    {
      id: 2,
      flxVal: 1,
      title: "Image",
    },
    {
      id: 3,
      flxVal: 2,
      title: "Product Name",
    },
    {
      id: 4,
      flxVal: 1,
      title: "Quantity",
    },
    {
      id: 5,
      flxVal: 1,
      title: "",
    },
  ];

  const products = [
    {
      id: 1,
      sku: "#CA25",
      image: "https://i.ibb.co/Jzb2p5N/product-img.png",
      product_name: "Item 01",
      qty: 10,
    },
    {
      id: 2,
      sku: "#CA34",
      image: "https://i.ibb.co/cNZ3gq0/product-img-1.png",
      product_name: "Item 02",
      qty: 5,
    },
    {
      id: 3,
      sku: "#CA34",
      image: "https://i.ibb.co/xsYxzTS/product-img-2.png",
      product_name: "Item 03",
      qty: 5,
    },
  ];

  return (
    <Container>
      <ProductListTable>
        <TableHeadingRow>
          {heading.map((item) => (
            <TableHeading
              key={item.id}
              flxVal={item.flxVal}
              title={item.title}
            />
          ))}
        </TableHeadingRow>
        <TableContents>
          {products.map((item) => (
            <ProductRow key={item.id} item={item} />
          ))}
        </TableContents>
      </ProductListTable>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  padding: 10px;
`;

const ProductListTable = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TableHeadingRow = styled.div`
  width: 90%;
  display: flex;
`;

const TableContents = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
