
import {useState} from 'react'
import './App.css';

import  { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

function App() {
 
  
  return (
    <div className="App">
      <h1>Hi all</h1>
     
       <Router>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/profile' 
                element={<Profile authorized={true}/>}
              />
            </Routes>

       </Router>

    </div>
  );
}

export default App;
