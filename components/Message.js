import styled from 'styled-components';

const Message = ({ user, message, timestamp }) => {
  return (
    <Container>
      <MessageBubble>{message}</MessageBubble>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
`;

const MessageBubble = styled.div`
  padding: 15px;
  padding-bottom: 26px;
  text-align: right;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
`;
