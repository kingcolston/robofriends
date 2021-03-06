import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'



class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield :''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
                .then(users=>this.setState({robots:users})
                );

    }


    onSearch = (event)=>{
        this.setState({searchfield: event.target.value})
    }


    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>;
        }
        return(
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox searchChange = {this.onSearch}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
    };


}

export default App;