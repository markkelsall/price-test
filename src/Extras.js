import React from 'react';

const Extras = ({callBack}) => {
    return (
        <div>
            <h3>Extras</h3>
            <button onClick={() => callBack(1, 12.99, false)}>GPS (Pay Local)</button>
            <button onClick={() => callBack(2, 24.99, true)}>Car Seat (Pay Now)</button>
        </div>
    );
};

export default Extras;