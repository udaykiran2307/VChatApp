
import "./App.css";
import { Route } from "react-router-dom";
import Chat from "./Pages/chat"
import Home from "./Pages/home";
function App() {
  return (
    <div className ="App">
   <Route path='/' component={Home} exact/>
   <Route path='/chats' component={Chat}/>
    </div>
  );
}

export default App;
