var message= require('../css/index.less'); // loading the main css file
var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter, Route,Link, NavLink, HashRouter, Switch } from 'react-router-dom'

 class Header extends React.Component{

      render(){
          return(
              <div> Hello React Router 4 r ! 
                    <NavLink to={'/'}> home </NavLink>
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


class Main extends React.Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route  exact path='/' component={Home}/>
                    <Route path='/about' exact component={About}/>
                </Switch>
            </main>  
        )
    }

}



class App extends React.Component{

    render(){
        return(
            <div>
               <Header/>
               <Main/>
            </div>
        )
    }

}





ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>
 ,
document.getElementById('app')
)
