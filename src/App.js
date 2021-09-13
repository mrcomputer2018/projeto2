import './App.css';
import Content from './componente/Content';
import Header from './componente/Header';
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Content/>
        </Router>
    </div>
  );
}

export default App;
