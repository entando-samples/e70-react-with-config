import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: ''};
    }

    handleNameChange(value) {
        this.setState(prevState => ({
            ...prevState,
            name: value,
        }));
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>Sample Entando Widget Configuration</h1>
                <label htmlFor="name">Name</label>
                <input id="name" onChange={e => this.handleNameChange(e.target.value)} value={name} />
            </div>
        );
    }
}

export default App;
