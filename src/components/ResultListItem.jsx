import styled from "styled-components";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const ResultListItem = ({ item }) => {
  return (
    <Container>
      <Left>
        <NormalText opct="1" color="#001eb9" wgt="500">
          {item.sku}
        </NormalText>
        <TitleText>{item.product_name}</TitleText>
        <NormalText opct="0.5" color="#162427" wgt="400">
          {item.desc}
        </NormalText>
      </Left>
      <Right>
        <Button>
          <ArrowForwardIosSharpIcon />
        </Button>
      </Right>
    </Container>
  );
};

export default ResultListItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 80%;

  &:not(:last-child) {
    border-bottom: 1px solid #969191;
  }
`;

const Left = styled.div``;

const NormalText = styled.p`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opct};
  font-weight: ${(props) => props.wgt};
`;

const TitleText = styled.h3`
  margin: 10px 0;
  color: #162427;
  font-weight: 700;
`;

const Right = styled.div``;

const Button = styled.button`
  color: #001eb9;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
