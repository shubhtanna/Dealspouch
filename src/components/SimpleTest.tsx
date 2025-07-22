// components/SimpleTest.tsx
import React from 'react';

const SimpleTest = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue', margin: '20px' }}>
      <h1>🚀 SIMPLE TEST - If you see this, React is working!</h1>
      <p>Environment Test:</p>
      <ul>
        <li>Access Key: {import.meta.env.VITE_AMAZON_ACCESS_KEY ? '✅ Found' : '❌ Missing'}</li>
        <li>Secret Key: {import.meta.env.VITE_AMAZON_SECRET_KEY ? '✅ Found' : '❌ Missing'}</li>
        <li>Associate Tag: {import.meta.env.VITE_AMAZON_ASSOCIATE_TAG ? '✅ Found' : '❌ Missing'}</li>
      </ul>
    </div>
  );
};

export default SimpleTest;