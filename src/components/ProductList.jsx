import styled from "styled-components";
import TableHeading from "./TableHeading";
import ProductRow from "./ProductRow";
import { useSelector } from "react-redux";

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

  const products = useSelector((state) => state.product.value);

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
            <ProductRow key={item._id} item={item} />
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
