import styled from "styled-components";

const TableHeading = ({ flxVal, title }) => {
  return (
    <Container flxval={flxVal}>
      <TitleText>{title}</TitleText>
    </Container>
  );
};

export default TableHeading;

const Container = styled.div`
  flex: ${(props) => props.flxval};
`;

const TitleText = styled.h4`
  color: #001eb9;
  font-weight: 700;
  text-transform: uppercase;
`;
