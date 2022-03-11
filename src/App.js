
import './App.css';
import Profile from './component/Profile';

function App() {
  //let aboutMe={firstName:"Heithem", lastName:"HELALI", bio:"doctor",proffession:"doctor"};
  let firstName="Heithem";
  let lastName="HELALI";
  let bio="My name is Heithem Helali, I have recently graduated with a PhD in Telecommunications.";
  let proffession="Doctor in Telecommunications Engineering";
  const handleName=(data)=>{alert(data)};
  return (
    <div >
      
    
    <Profile firstName={firstName} lastName={lastName} bio={bio} proffession={proffession} handleName={handleName}/>
    </div>
  );
}

export default App;
