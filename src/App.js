// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((people, id) => <h1 key={id}>{people.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        // Inside the method, send a fetch request to http://api.open-notify.org/astros.json (Links to an external site.),
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(({people}) => this.setState({ peopleInSpace: people }))
    }

}

export default App