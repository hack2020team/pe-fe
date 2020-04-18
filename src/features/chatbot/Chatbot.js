import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'Hi, how can I help you?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Thanks for your message! I will come back to you ASAP with an answer',
    end: true,
  },
];

export default function SimpleTable() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ChatBot
        botAvatar="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
        opened={open}
        steps={steps}
        floating={true}
      />
    </div>
  )
}

