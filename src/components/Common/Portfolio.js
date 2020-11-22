import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/img/portfolio/Dance.jpg';
import img2 from '../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../assets/img/portfolio/Music.jpg';
import img4 from '../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../assets/img/portfolio/06-thumbnail.jpg';

const portfolio = [
    {title: 'Nature', subtitle: 'My wish is to stay always like this', image: img2},
    {title: 'Movies', subtitle: 'Colours are the smiles of Everyone', image: img4},
    {title: 'Music && Songs', subtitle: 'Music is life itself ', image: img3},
    {title: 'Science', subtitle: 'The Science of today is tech of tomorrow', image: img5},
    {title: 'Photography', subtitle: 'The Pause Button of life', image: img6},
    {title: 'Dance', subtitle: 'Forget Ur Troubles and dance', image: img1}
];


class Portfolio extends Component {
    render(){
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Enter-Tain Ur Self</h2>
                        <h4 className="section-subheading text-muted">Entertainment has this way of resetting itself</h4>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) => {
                            return <PortfolioItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;