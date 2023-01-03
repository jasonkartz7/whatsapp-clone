import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import CustomMoreVertical from './CustomMoreVertical';
import SearchIcon from '@mui/icons-material/Search';

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
          <CustomMoreVertical />
        </IconsGroup>
      </Header>
      <SearchChat>
        <SearchBar>
          <SearchIcon />
          <SeacrhInput />
        </SearchBar>
      </SearchChat>
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
  /* justify-content: center; */
  /* align-items: center; */
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

const SearchChat = styled.div`
  background-color: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 10px;
  border-bottom: 1px solid #ededed;
  background: white;
`;

const SeacrhInput = styled.input`
  width: 100%;
  border: none;
`;
