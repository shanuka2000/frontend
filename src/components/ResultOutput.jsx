import styled from "styled-components";
import ResultList from "./ResultList";
import { useSelector } from "react-redux";

const ResultOutput = () => {
  const result = useSelector((state) => state.search.value);
  const searchName = useSelector((state) => state.search.searchName);

  return (
    <Container>
      <ResultOverviewWrapper>
        <ResultOverview>
          {result.length} results found for ‘{searchName}’
        </ResultOverview>
      </ResultOverviewWrapper>
      <ResultList />
    </Container>
  );
};

export default ResultOutput;

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ResultOverviewWrapper = styled.div`
  padding: 10px;
`;

const ResultOverview = styled.h2`
  color: #162427;
  opacity: 0.5;
`;
