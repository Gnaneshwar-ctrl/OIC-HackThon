import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Red.jpg';

class Visual extends Component {
    render(){
        return (
            <div>
                <Header
                    title="Visual and Verbal"
                    subtitle="Click On Below Button to Access the Games"
                    buttonText="Explore"
                    link='/Services'
                    showButton={true}
                    image={image}
               />
            </div>
            
        )
    }
}

export default Visual;