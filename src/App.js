import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleName = (name) => alert(`My name is ${name}`);
  return (
    <div className="App">
    <Profile fullName= "mossad me" bio = "j ai 32 ans im employee" profession = "Employee" handleName={handleName}>
      <img src='/my photo.jpg' alt='me' style={{widh :200, height:180, border : 'solid red 2px'}}></img>
    </Profile>

    </div>
  );
}

export default App;
