import React, {Component} from 'react';
import SingleService from '../Common/SingleService';
import Header from '../Common/Header';
import Visual from './Visual';
import PS from './PS';
import Maneg from './Maneg';



const services = [
    {title: 'Visual && Verbal Skills', description: 'Strong Visual and Verbal skills will help to encourage essential discussion and the ability to remember visual information', icon: 'fa-eye'},
    {title: 'Problem-solving skills', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-laptop'},
    {title: 'Management skills', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-clock'}
];

class Services extends Component {
    render(){

        return (
            <section>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">TriNerta is Ready For Following!</h3>
                    </div>
                </div>
                <div className="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key={index} />
                               
                    })}    
                </div>
                <Visual />
                <PS />
                <Maneg />
                </div>
            </section>
        )
    }
}

export default Services;