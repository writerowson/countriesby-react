import logo from './logo.svg';
import './App.css';

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person name="kodbel" nayika="mousumi"></Person>
      <Person name="rowshon"></Person>
      <Person name="Salman" nayika="katrina"></Person>
      <Person></Person>
      <h5>New componant</h5>

      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend name="rubi" nayika="dikldar"></Friend>
    </div>
  );
}
export default App;
function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>,
      <p>Nayika : {props.nayika}</p>

    </div>)
}
function Friend(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>,
      <p>Nayika : {props.nayika}</p>
    </div>)
}



