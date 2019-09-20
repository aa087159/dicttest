import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        word: '',
        data: []
    }
    
    onChange = (e) => {
        const { value,name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Context.Provider value={
                                {
                                state: this.state,
                                onChange : this.onChange,
                                onSubmit: (e)=>{
                                    e.preventDefault()
                                    fetch('https://localhost:5000/getword', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(this.state.word)
                                    })
                                }
                                
                                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer

