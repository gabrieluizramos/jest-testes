import React from 'react';
import { Button } from './button';

function App() {
  return (
    <>
      <button>
        botao normal
      </button>
      <Button onClick={() => window.alert('olar')}>
        click
      </Button>
      <Button onClick={() => console.log('olar')}>
        click dnv
      </Button>
    </>
  );
}

export default App;
