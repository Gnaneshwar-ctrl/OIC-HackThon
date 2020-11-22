import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/Alert.jpg';


class Alert extends Component {

    render(){
        return (
            <div>
               <Header
                    title="Alert!"
                    buttonText="Click or Shake"
                    link='/Alert'
                    showButton={true}
                    image={image}
               />

            </div>
        )
    }
}

export default Alert;