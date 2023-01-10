/* eslint-disable react/jsx-key */
import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { collection, where, getDocs, query, addDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../Auth';

const Friend = ({ photoURL, displayName,id }) => {
  const { currentUser } = useAuth();
  const createChat = async (id) => {
    const chatsRef = collection(db, 'chats');
    const q = query(
      chatsRef,
      where('users', 'array-contains', currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const chatAlreadyExist = (friend_id) =>
      !!querySnapshot?.docs.find(
        (chat) =>
          chat.data().users.find((user) => user === friend_id)?.length > 0
      );
    if (!chatAlreadyExist(id)) {
      addDoc(chatsRef, { users: [currentUser.uid, id] });
    } else {
    }
  };
  return (
    <Container onClick={()=>createChat(id)}>
      <FrdAvatar src={photoURL} />
      <ChatContainer>
        <div style={{ gridArea: 'name' }}>{displayName}</div>
      </ChatContainer>
    </Container>
  );
};

export default Friend;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 67px;
  padding-left: 15px;
  word-break: break-word;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const FrdAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

const ChatContainer = styled.div`
  display: grid;
  padding: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #ededed;
  gap: 10px;
  grid-template-areas: 'name name time' 'latest_message latest_message.';
`;
