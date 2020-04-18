import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#1f56b3',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#1f56b3',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  userFontColor: '#1f56b3'
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
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
          opened={open}
          background= {'#1f56b3'}
          steps={steps}
          floating={true}

        />
      </ThemeProvider>
    </div>
  )
}

