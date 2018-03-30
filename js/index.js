var message= require('../css/index.less'); // loading the main css file
var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter, Route,Link, NavLink } from 'react-router-dom'

 class FirstClass extends React.Component{

      render(){
          return(
              <div> Hello React Router 4 r ! 
                    <NavLink to={'/home'}> home </NavLink>
                    <NavLink to={'/about'}> about  </NavLink>
                
                   </div>
          )
      }

 }

 class Home extends React.Component{

    render(){
        return(
            <div> Home ! </div>
        )
    }

}

class About extends React.Component{

    render(){
        return(
            <div> ABOUT ! </div>
        )
    }

}




ReactDOM.render(
    <BrowserRouter>
       <div>
       <Route path='/' component={FirstClass}/>
       <Route path='/home' component={Home}/>
       <Route path='/about' component={About}/>
       </div>
    </BrowserRouter>
 ,
document.getElementById('app')
)
