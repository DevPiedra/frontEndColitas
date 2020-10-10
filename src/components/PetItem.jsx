import React from 'react';
import moment from 'moment';

const PetItem = props => {
    moment.locale('es');
    const date = moment (props.pet.date, "YYYYMMDD").fromNow();
    return (
        <div className="Pet">
            <div 
                className="Pet-cover"
                style={{
                    background: `url('${props.pet.photo}')`
                }}
                >
                {props.pet.adopt &&
                    <div className="Pets-type">
                        Adopcion
                    </div>
                }
                <div className="Pets-content">
                    <div className="Pets-head">
                        <h2>{props.pet.name}</h2>
                        <i>
                            {props.pet.gender === 'male' && ''}
                            {props.pet.gender === 'female' && ''}
                        </i>
                    </div>
                    <p>{props.pet.description}</p>
                    <div className="Pets-date">
                        <i className="fas fa-calendar-alt" />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PetItem;