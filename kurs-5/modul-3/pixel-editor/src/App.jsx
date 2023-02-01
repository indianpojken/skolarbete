import { useState } from 'react';
import './App.css';

import Editor from './components/Editor'
import Form from './components/Form';

function App() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  return (
    <div className="app">
      {!size.width && !size.height
        ? <Form setSize={setSize} />
        : <Editor width={size.width} height={size.height} />
      }
    </div>
  );
}

export default App
