import React from 'react';

function Simpson(props) {
    const {simpson}=props;
    return (
        <div>
            <h3>{simpson.name}-{simpson.age}</h3>
            <p>{simpson.surname}-{simpson.info}</p>
            <img src={simpson.photo} />
        </div>
    );
}

export default Simpson;