import moment from 'moment/moment';
import Image from 'next/image';
import styled from 'styled-components';

const Message = ({ user, message, timestamp }) => {
  const loginMail = 'jcson0417@gmail.com';
  const MessageType = user === loginMail ? MyMessage : FrdMessage;
  return (
    <Container>
      {user !== loginMail && (
        <MessageTail>
          <Image src="/message-tail-frd.svg" alt="" width={10} height={20} />
        </MessageTail>
      )}
      <MessageType>
        {message}
        <Timestamp>{moment(timestamp).format('LT')}</Timestamp>
      </MessageType>
      {user === loginMail && (
        <MessageTail>
          <Image src="/message-tail-my.svg" alt="" width={10} height={20} />
        </MessageTail>
      )}
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

const MyMessage = styled(MessageBubble)`
  margin-left: auto;
  background-color: #dcf8c6;
  border-radius: 8px 0px 8px 8px;
`;

const FrdMessage = styled(MessageBubble)`
  text-align: left;
  background-color: white;
  border-radius: 0px 8px 8px 8px;
`;

const MessageTail = styled.span`
  margin-top: -2px;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
