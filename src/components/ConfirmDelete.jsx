import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";

const ConfirmDelete = () => {
  return (
    <Container>
      <Row align="right">
        <CloseRoundedIcon />
      </Row>
      <Row>
        <ErrorMark>
          <PriorityHighRoundedIcon />
        </ErrorMark>
      </Row>
      <Row>
        <Heading>Are you sure?</Heading>
        <SubDetails>
          You will not be able to undo this action if you proceed!
        </SubDetails>
      </Row>
      <Row flx="row">
        <CancelBtn>Cancel</CancelBtn>
        <DeleteBtn>Delete</DeleteBtn>
      </Row>
    </Container>
  );
};

export default ConfirmDelete;

const Container = styled.div`
  display: none;
  position: absolute;
  top: 40%;
  left: 40%;
  padding: 10px;
  background-color: #ff000064;
  border-radius: 16px;
  width: 25%;
  height: 30%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flx === "row" ? "row" : "column")};
  align-items: ${(props) => (props.align === "right" ? "flex-end" : "center")};
  margin: 10px;
`;

const ErrorMark = styled.div`
  background-color: #f82249;
  color: #ffffff;
  width: max-content;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
`;

const Heading = styled.h4``;

const SubDetails = styled.h5``;

const CancelBtn = styled.button``;

const DeleteBtn = styled.button``;
