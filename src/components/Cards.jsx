import React from 'react';

const Cards = () => (
    <div className='Cards'>
        <div className="Cards-container">
            <div className="Cards-content">
                <div className="Cards-title">
                    <h3>Nuestras Colitas</h3>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div>
                        <img src="images/picture1.png" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title"><strong>Atom</strong></h3>
                            <p className="card-text">Es una chica maravillosa, amorosa y leal, forma un gran vínculo con su gente si se le da tiempo para ganarse su confianza.</p>
                            <button type="button" className="btn btn-dark">+ Info</button>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <img src="images/picture2.png" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title"><strong>Loki</strong></h3>
                            <p className="card-text"> No necesita mucho para estar contento. Es un adicto a la tele, aunque le encanta salir a caminar, la siesta es su actividad favorita.</p>
                            <button type="button" className="btn btn-dark">+ Info</button>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <img src="images/picture3.png" alt="..." />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title"><strong>Luna</strong></h3>
                            <p className="card-text">Es una chica increíblemente inteligente y atenta que ha estado lidiando con la ansiedad. Ella está increíblemente bien entrenada y conoce una amplia variedad de comandos y obediencia básica.</p>
                            <button type="button" className="btn btn-dark">+ Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Cards; 