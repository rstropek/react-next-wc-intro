import './App.css';
import NameForm from './Form';

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      <NameForm firstName="John" lastName="Doe"
                onSubmit={(props) => console.log(`Hi, ${props.firstName} ${props.lastName}`)} />

      <p>Have fun with this sample</p>
    </div>

  );
}

export default App;
