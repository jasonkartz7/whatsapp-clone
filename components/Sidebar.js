import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar src="https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?autocompress&cs=tinysrgb&dpr=1&w=500" />
        <IconsGroup>
          <IconButton>
            <Image src="/story.svg" alt="" width="24" height="24" />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
        </IconsGroup>
      </Header>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: #ffffff;
  min-width: 320px;
  max-width: 450px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  width: 100%;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsGroup = styled.div``;
