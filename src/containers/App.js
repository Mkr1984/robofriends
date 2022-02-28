import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import RobotcardList from '../components/RobotcardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.scss';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response=> response.json())
            .then( users=> this.setState({robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => { return robot.name.toLowerCase().includes(searchfield.toLowerCase()); }) 
        return !robots.length ?
            <h1>Loading...</h1> : 
            (
            <Container fluid className='text-center'>
                <h1 className='my-3' >Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <RobotcardList  robots={filteredRobots} />
                </Scroll>
            </Container>
        );
    }
}

export default App;