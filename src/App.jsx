
import './App.css';

import ComponenteUno from './Componentes/ComponenteUno';


const App = () => {
  return (
    <div className="App">
      <ComponenteUno 
      lastName="Doe, "
      firstName="Jane" age={45}
      hairColor="Black"/>
      <ComponenteUno 
      lastName="Smith, " 
      firstName="John" age={88}
      hairColor="Brown"/>
      <ComponenteUno 
      lastName="Fillmore, " 
      firstName="Millard" 
      age={50}
      hairColor ="Brown"/>
      <ComponenteUno 
      lastName="Smith, " 
      firstName="Maria" 
      age={62} 
      hairColor="Brown"/>
      
    </div>
  );
}

export default App;
