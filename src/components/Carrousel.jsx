import React from 'react';

const Carrousel = () => (
    <div className="Carrousel">
        <div className="Carrousel-container">

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000" >
                        <img src="images/dog_1.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="images/pic_2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="images/pic_3.jpg" className="d-block w-100"  alt="..."/>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Carrousel;