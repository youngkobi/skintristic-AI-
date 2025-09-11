import Nav from './ccomponents/nav';
import logo from './logo.svg';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Introduce from './pages/introduce/Introduce.jsx';

function App() {
  return (
<Router>
  <Nav/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Introduce/>}/>

</Routes>

</Router>
  );
}

export default App;
