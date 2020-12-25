import React, { Component } from 'react'
import CardList from './Components/card-list'
import './App.css'
import Inputfield from './Components/searchBox/searchbox'

export class App extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            Monster: [],
            searchField: ''
        }
    }


    componentDidMount() {
        const myPromise = new Promise((resolve, reject) => {
            if(true) {
                resolve(fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json()))
            }  else {
                reject("You should try again.........");
            }
        });


        myPromise.then(data => this.setState({Monster: data})).catch(rejectValue => document.write(rejectValue));
    }


    findChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const {Monster, searchField} = this.state;
        
         const filteredArray = Monster.filter(monster => monster.name.toLowerCase().includes(searchField))
        return (
            <div className="main-container">
                
           <div className="heading-container">
                  <h1 className="heading">Monster Paradise</h1>
           </div>

            <Inputfield placeholder="Monster Name" handleChange={this.findChange}/>

             <CardList name={filteredArray}/>
            </div>
        )
    } 
}

export default App
