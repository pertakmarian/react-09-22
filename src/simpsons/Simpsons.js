import React from 'react';
import {simpsons} from "../simpson/data";
import Simpson from "../simpson/Simpson";

function Simpsons(props) {
    return (
        <div>
            {
                simpsons.map((value,index) => <Simpson key={index} simpson={value}/>)
            }
        </div>
    );
}

export default Simpsons;