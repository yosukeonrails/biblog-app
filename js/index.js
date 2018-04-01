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
                    <NavLink to={'/create'}> create  </NavLink>
            </div>
          )
      }

 }

 class Create extends React.Component{

    constructor(props){
        super(props)

       this.state={
           textarea:"",
           input:""
       } 
    }

    handleSubmit(){
        
    }

    handleInputs(e , target){
            
        this.setState({
            [target]:e.target.value
        })

    }


    render(){
        console.log(this.state)

        return(
            <div>

                <h1> Create </h1>
                   
                   <div>
                        <input ref="input" onChange={ (event)=>{ this.handleInputs(event, "input")} } ></input>
                   </div>
                    
                    
                    <div>
                        <textarea  ref="textarea" onChange={ (event)=>{ this.handleInputs(event, "textarea")} }  ></textarea>
                    </div>
                    <button> Submit </button>
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
                    <Route path='/create' exact component={Create}/>

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
