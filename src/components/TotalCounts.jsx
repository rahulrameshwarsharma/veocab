import React from 'react'

const TotalCounts = ({ icon, name, count }) => {
    return (
        <div className='flexRow total__count__container '>
            <div className='mar_right_15'>
                <img src={icon} alt={name} className='img_medium' />
            </div>

            <div >
                <p>{name}</p>
                <h1>{count}</h1>
            </div>
        </div>
    );
};


export default TotalCounts