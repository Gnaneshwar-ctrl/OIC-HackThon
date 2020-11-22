import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Red2.jpg';
import Demo from './ChessBoard'


class Maneg extends Component {
    render(){
        return (
            <div>
                <Header
                    title="Management skills"
                    subtitle="Click On Below Button to Access the Tasks"
                    buttonText="Explore"
                    link='/ChessBoard'
                    showButton={true}
                    image={image}
               />  
            </div>
            
        )
    }
}

export default Maneg;