import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  font-family: 'Arial', sans-serif;
`;

const ChatWindow = styled.div`
  background: #1e3a52;
  color: #ffffff;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #82caff;
  text-align: center;
  margin-bottom: 10px;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  max-height: 300px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #82caff;
    border-radius: 4px;
  }
`;

const MessageCard = styled.div<{ isUser: boolean }>`
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background: ${({ isUser }) => (isUser ? '#0e76a8' : '#2c5364')};
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 75%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #3a5a73;
  border-radius: 8px;
  background-color: #1e3a52;
  color: #ffffff;

  &:focus {
    outline: none;
    border-color: #82caff;
  }
`;

const SubmitButton = styled.button`
  background-color: #82caff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #5eb0ff;
  }
`;

const ChatWithAI: React.FC = () => {
  const [messages, setMessages] = useState<{ isUser: boolean; text: string }[]>([
    { isUser: false, text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { isUser: true, text: input }];
    setMessages(newMessages);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { isUser: false, text: 'Thank you for your question! Let me help.' },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <ChatContainer>
      <ChatWindow>
        <Title>Chat with AI</Title>
        <ChatMessages>
          {messages.map((message, index) => (
            <MessageCard key={index} isUser={message.isUser}>
              {message.text}
            </MessageCard>
          ))}
        </ChatMessages>
        <InputContainer>
          <TextInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message..."
          />
          <SubmitButton onClick={handleSendMessage}>Send</SubmitButton>
        </InputContainer>
      </ChatWindow>
    </ChatContainer>
  );
};

export default ChatWithAI;
