import React, {useEffect, useState} from 'react';
import ChatHeader from "./ChatHeader.jsx";
import ChatMessage from "./ChatMessage.jsx";
import ChatInput from "./ChatInput.jsx";

const Chat = ({contact}) => {
  const [text, setText] = useState("")
  const [Loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])

  useEffect(() => {
    setLoading(true);
    const saveMessages = localStorage.getItem(`messages:${contact.id}`)
    if(saveMessages){
      setMessage(JSON.parse(saveMessages))
    }
    else{
      setMessage([])
    }
    setLoading(false)
  }, [contact.id]);
  const saveMessages = newMessages => {
    localStorage.setItem(`messages:${contact.id}`, JSON.stringify(newMessages))
  }
  const handleSend = () => {
if(text.trim()){
  const newMessage = [...message, {text, timestamp: new Date().toLocaleTimeString()}]
  setMessage(newMessage)
  saveMessages(newMessage)
  setText('')
}
  }

  return (
    <div className='flex flex-1 flex-col h-screen'>
      <ChatHeader contact={contact}/>
      <ChatMessage contact={contact} messages={message} loading={Loading} />
      <ChatInput text={text} setText={setText} contact={contact} onSend={handleSend}/>
    </div>
  );
};
export default Chat;



