import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/services.jpg';
import Services from './Services';


class Home extends Component {
    render(){
        return (
            <div>
               <Header
                    title="Hello!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Explore"
                    link='/Services'
                    showButton={true}
                    image={image}
               />

            </div>
        )
    }
}

export default Home;