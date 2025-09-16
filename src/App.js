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

function App() {
  const [cameraImg, setCameraImg] = useState("")

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
    <Route path="/capture" element={<Capture cameraImg={cameraImg} setCameraImg={setCameraImg}/>}/>
    <Route path="/camera" element={<CameraPage cameraImg={cameraImg} setCameraImg={setCameraImg}/>}/>
   

</Routes>

</Router>
  );
}

export default App;
