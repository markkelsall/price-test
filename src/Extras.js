import React from 'react';

const Extras = ({addExtra}) => {
    return (
        <div>
            <h3>Extras</h3>
            <button onClick={() => addExtra(1, 12.99, false)}>GPS (Pay Local)</button>
            <button onClick={() => addExtra(2, 24.99, true)}>Car Seat (Pay Now)</button>
        </div>
    );
};

export default Extras;