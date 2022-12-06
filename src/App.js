import logo from './logo.svg';
import './App.css';

const number = 5555;

const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'Sopno'},
  {name: 'Shuvro', job: 'pathor'},
]


const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'kuber', 'Jashim', 'Razzak', 'Anwar']
  return (
    <div className="App">
    {
      nayoks.map(nayok => <li>{nayok}</li>)
    }
    {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    } */}

    {
      singers.map(singer => <Person name={singer.name}></Person>)
    }

    {/* <Person name="Rubel" nayika="moushumi"></Person>   
    <Person name="BappaRaz" nayika="cheka"></Person>   
    <Person name="Kuber" nayika="kopila"></Person>    */}
    <h5>New Component. YAY</h5>
    <Friend movie="Singam" phone="01777"></Friend>   
    <Friend phone="01999"></Friend>   
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h3>Movie: {props.movie}</h3>
      <p>{props.phone}</p>
    </div>
  )
}

export default App;
