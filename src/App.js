import './App.css';
import Content from './componente/Content';
import Menu from './componente/Menu';
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
          <Content/>
          <Menu/>
        </Router>
    </div>
  );
}

export default App;
