import React from 'react'

const Color = React.createContext('red')

export default class Context extends React.Component {
    state = {
        color: 'red'
    }
    toggleColor = () => this.setState({
        color: this.state.color === 'red' ? 'blue' : 'red'
    })
    render() {
        return (
            <Color.Provider value={this.state.color}>
                <Text onClick={this.toggleColor}></Text>
            </Color.Provider>
        )
    }
}

const Text = props => (
    <Color.Consumer>
        {color => <Consumer color={color} {...props}/>}
    </Color.Consumer>
)

const Consumer = props => (
    <p style={{color: props.color}} onClick={props.onClick}>点我变色</p>
)