import Input from './components/Input';

function App() {
  return (
    <h1>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
    </h1>
  );
}

export default App;
