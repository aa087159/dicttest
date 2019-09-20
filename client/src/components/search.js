import React, { Component } from 'react'
import { Consumer } from '../Context'

class search extends Component {

    render() {
        return (
            <Consumer>
                {value=>{return(
                    <form  
                          //action="http://localhost:5000/getword" 
                          //method="POST"
                          onSubmit={value.onSubmit}
                          >
                        <div className="form-group">
                            <label>Search a Word:</label>
                            <input type="text" 
                                name="word" 
                                value={value.state.word} 
                                onChange={value.onChange}
                                className="form-control" 
                                placeholder="Enter a word" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )}}
                

            </Consumer>
        )
    }
}

export default search
