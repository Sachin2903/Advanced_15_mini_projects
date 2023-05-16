import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import './App.css';
import {About} from "./component/pages/about/about";
import {Contact} from "./component/pages/contact/contact";
import {Login} from "./component/pages/login/login";
import {Project} from "./component/pages/project/project";
import {Videos} from "./component/pages/videos/videos";
import { Register } from './component/pages/register/register';


import {Home} from "./component/pages/home/home"
function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/project",
      element:<Project/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/video",
      element:<Videos/>
    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/register",
      element:<Register/>,
    }
  ])
  return (
    <div className="App">
     <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
