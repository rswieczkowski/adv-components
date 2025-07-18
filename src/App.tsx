import Input from './components/Input';
import { useRef } from 'react';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label='Test' id='test' ref={input} />
    </main>
  );
}

export default App;
