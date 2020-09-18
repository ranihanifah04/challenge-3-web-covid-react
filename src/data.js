import React from 'react'
import Media from './Components/Media';

class data extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <Media image="data.png">  
                        <h1 className="display-4">Data Persebaran Covid-19 Indonesia</h1>
                        </Media>      
                    </div>
                </div>
            </div>
        )
    }
}

export default data;