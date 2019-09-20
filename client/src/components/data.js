import React, { Component } from 'react'
import { Consumer } from '../Context'

class data extends Component {
    

    render() {
        return (
            <Consumer>
                {value=>{
                    let { word, data } = value.state
                    if(data.length!==0 && word.length!==0){
                        return(
                                <div>
                                    {data.map(data=>
                                        <div key={data.id} className="card" style={{width: "18 rem" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">{data.body}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}}
                    }
                
            
            </Consumer>
        )
    }
}

export default data
