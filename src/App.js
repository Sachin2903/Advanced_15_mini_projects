import {store} from "./store/todoStore/todoStore";
import { Provider } from "react-redux";
import './App.css';
import { Todo } from './components/templates/todo';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>
      </Provider>
     
    </div>
  );
}

export default App;
