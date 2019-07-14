import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({carPrice, currencyDisplay, fees, extras}) => {
    let feesTotal = 0;
    fees && fees.forEach(fee => {
        feesTotal += parseInt(fee.amount) * fee.quantity;
    });

    let payNowExtras = 0;
    let payLocalExtras = 0;
    extras && extras.forEach(extra => {
        if (extra.payNow) {
            payNowExtras += parseInt(extra.amount) * extra.quantity;
        } else {
            payLocalExtras += parseInt(extra.amount) * extra.quantity;
        }
    });
    const totalPrice = carPrice + feesTotal + payNowExtras;
    return (
        <div>
            <span>Total Price:{currencyDisplay}{totalPrice}</span><br />
            {payLocalExtras !== 0 && <span>Pay at desk:{currencyDisplay} {payLocalExtras}</span>}
        </div>
    );
};

TotalPrice.propTypes = {
    carPrice: PropTypes.number,
    currencyDisplay: PropTypes.string,
    fees: PropTypes.array,
    extras: PropTypes.array
};

export default TotalPrice;