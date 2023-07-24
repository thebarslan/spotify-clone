import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Section from "./components/Section/Section";

function App() {
     return (
          <div className="App flex bg-black w-screen h-screen p-2">
               <BrowserRouter>
                    <Routes className="flex">
                         <Route path="/" element={<Layout />}>
                              <Route index={true} element={<Main />} />
                              <Route path="section/:id" element={<Section />} />
                         </Route>
                    </Routes>
               </BrowserRouter>
          </div>
     );
}
export default App;
