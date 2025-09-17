import Nav from './ccomponents/nav';
import logo from './logo.svg';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Introduce from './pages/introduce/Introduce';
import Aos from "aos";
import { useEffect, useState } from 'react';
import Capture from './pages/capture/Capture'
import CameraPage from './pages/camera/Camera';
import Select from './pages/select/Select';
import Summary from './pages/summary/Summary';

function App() {
  const [cameraImg, setCameraImg] = useState("")
  const [apiSum, setApiSum] = useState(null)

  useEffect(()=>(
Aos.init()
  ), [])
  return (
<Router>
  <Nav/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/introduce" element={<Introduce/>}/>
    <Route path="/select" element={<Select/>}/>
    <Route path="/summary" element={<Summary/>}/>
    <Route path="/capture" element={<Capture cameraImg={cameraImg} setCameraImg={setCameraImg}/>} setApiSum={setApiSum} apiSum={apiSum}/>
    <Route path="/camera" element={<CameraPage cameraImg={cameraImg} setCameraImg={setCameraImg}/>} setApiSum={setApiSum} apiSum={apiSum}/>
   

</Routes>

</Router>
  );
}

export default App;
