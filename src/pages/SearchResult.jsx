import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ResultOutput from "../components/ResultOutput";

const SearchResult = () => {
  return (
    <Container>
      <Navigation />
      <Header title="Products" />
      <ResultOutput />
    </Container>
  );
};

export default SearchResult;

const Container = styled.div``;
