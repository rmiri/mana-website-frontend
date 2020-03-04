import React from 'react';
import Welcome from './containers/Welcome';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';



class App extends React.Component {

  
  render() {

    return (
      <div>
        <Router>
         <Welcome />
        </Router>
        </div>
    );
  }
}

export default App;
