
export const messagesDownScroll = () => {
  const message = document.getElementById('block_message');
   setTimeout(()=>{
    message.scrollTop = message.scrollHeight
  },1000)



};

