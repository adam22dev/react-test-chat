import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageInfo from './MessageInfo';
import InboxMessage from './InboxMessage';
import OutboxMessage from './OutboxMessage';

function MessagesBlocks(props) {
  const profileId = useSelector((state) => state.application.profile._id);
  const toUserId = props.message.toUserId;

  if (props.message.type === 'info') {
    return <MessageInfo content={props.message.content} />;
  }
  if (toUserId === profileId) {
    return <InboxMessage content={props.message.content} />;
  }
  return (
    <OutboxMessage message={props.message} content={props.message.content} />
  );
}

export default MessagesBlocks;
