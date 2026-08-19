import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ProjectDetails from "./pages/Project_Details";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/project/:id"
element={<ProjectDetails/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;