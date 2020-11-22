import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Red1.jpeg';
import Crossword from './CrossWord';

class PS extends Component {
    render(){
        return (
            <div>
                <Header
                    title="Problem-solving skills"
                    subtitle="Click On Below Button to Access the puzzles"
                    buttonText="Explore"
                    link='/CrossWord'
                    showButton={true}
                    image={image}
               />
            </div>
            
        )
    }
}

export default PS;