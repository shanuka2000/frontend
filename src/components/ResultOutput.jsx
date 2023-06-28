import styled from "styled-components";
import ResultList from "./ResultList";

const ResultOutput = () => {
  return (
    <Container>
      <ResultOverviewWrapper>
        <ResultOverview>4 results found for ‘Books’</ResultOverview>
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
