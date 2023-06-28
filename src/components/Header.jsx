import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Header = () => {
  return (
    <Container>
      <TitleWrapper>
        <MainTitle>Products</MainTitle>
      </TitleWrapper>
      <ActionsWrapper>
        <SearchContainer>
          <Input placeholder="Search for products" />
          <SearchButton>
            <SearchRoundedIcon />
            Search
          </SearchButton>
        </SearchContainer>
        <ButtonsContainer>
          <ButtonNewProduct>New Product</ButtonNewProduct>
          <BUttonFavourite>
            <StarRoundedIcon />
          </BUttonFavourite>
        </ButtonsContainer>
      </ActionsWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 10px;
`;

const TitleWrapper = styled.div`
  padding: 10px;
`;

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
`;

const ActionsWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  background-color: #f7f7f7;
  flex: 1;
  padding: 5px 15px;
  border-radius: 50px;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  flex: 6;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 500;
`;

const SearchButton = styled.button`
  flex: 1;
  padding: 5px;
  background-color: #001eb9;
  color: #ffffff;
  border: none;
  border-radius: 80px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonNewProduct = styled.button`
  padding: 10px 5%;
  background-color: #001eb9;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
`;

const BUttonFavourite = styled.button`
  padding: 5px 10px;
  border: 1px solid #001eb9;
  border-radius: 10px;
  background-color: transparent;
  color: #001eb9;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
