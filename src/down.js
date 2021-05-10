
export const messagesDownScroll = () => {
  const message = document.getElementById('block_message');
  let scrollDown = setTimeout(()=>{
    message.scrollTop = message.scrollHeight
  },1000)



};

