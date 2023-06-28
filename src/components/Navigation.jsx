import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <UsernameWrapper>
        <UserName>ADMIN</UserName>
        <ArrowDropDownRoundedIcon />
      </UsernameWrapper>
      <AvatarWrapper>
        <Avatar></Avatar>
      </AvatarWrapper>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const UsernameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const UserName = styled.h5`
  font-weight: 700;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Avatar = styled.div`
  position: relative;
  display: inline-block;
  background-color: #001eb9;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 3px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: lime;
  }
`;
