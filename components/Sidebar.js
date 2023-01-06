/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import CustomMoreVertical from './CustomMoreVertical';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Friend from './Friend';
import { collection, where, getDocs, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../Auth';



const Sidebar = () => {
  const [friends, setFriends] = useState([]);
  const { currentUser } = useAuth();
  console.log(currentUser?.email);
  useEffect(() => {
    async function fetchFriends() {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '!=', currentUser?.email));
      const querySnapshot = await getDocs(q);
      console.log('querySnapshot', querySnapshot);
      setFriends(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    fetchFriends();
  }, []);
  return (
    <Container>
      <Header>
        <UserAvatar
          src="https://images.pexels.com/photos/210547/
        pexels-photo-210547.jpeg?autocompress&cs=tinysrgb&dpr=1&w=500"
        />
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
      <Notification>
        <NotificationAvatar>
          <NotificationsOffIcon style={{ color: '#9DE1FE' }} />
        </NotificationAvatar>
        <NotificationText>
          <div>Get Notified of New Messages</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#">
              <u>Turn On Desktop Notifications</u>
            </a>
            <IconButton>
              <ArrowForwardIosIcon style={{ width: 15, height: 15 }} />
            </IconButton>
          </div>
        </NotificationText>
      </Notification>
      <SearchChat>
        <SearchBar>
          <SearchIcon />
          <SeacrhInput />
        </SearchBar>
      </SearchChat>
      {/* {chats.map((chat) => (
        <Chat
          latestMessage={chat.latestMessage}
          name={chat.name}
          timestamp={chat.timestamp}
          photoURL={chat.photoURL}
        />
      ))} */}
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          photoURL={friend.photoURL}
          displayName={friend.displayName}
          id={friend.id}
        />
      ))}
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

const IconsGroup = styled.div`
  margin-left: 40%;
`;

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

const Notification = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #9de1fe;
`;

const NotificationAvatar = styled(Avatar)`
  background-color: white;
`;

const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
`;
