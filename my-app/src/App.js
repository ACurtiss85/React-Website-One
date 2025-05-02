import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        {/* This is a child */}
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Santa">
        <button>Push me</button>
      </Greet>
      <Greet name="Diana" heroName="Stupid Guy"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Santa"/>
      <Welcome name="Diana" heroName="Stupid Guy"/>      
      <Hello />
      <Message/>
      <Counter/>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
    </div>
  );
}

export default App;
