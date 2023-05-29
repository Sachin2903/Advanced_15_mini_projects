import './App.css';
import MovieMain from './components/pages/movieMain';
import { Favourite } from './components/pages/favourite';
import { Navbar } from './components/pages/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Fragment } from 'react';
import {store} from "./store/moviestore";
import { Provider } from 'react-redux';

function App() {
  return (
<BrowserRouter>
<Provider store={store}>
    <Navbar/>
    <Routes>
       
       <Route path="/" element={<MovieMain/>} />

       <Route path="/favorite" element={<Favourite/>} />




    </Routes>
    </Provider>
    
    </BrowserRouter>
    
     
   
      
     
  
  );
}

export default App;
