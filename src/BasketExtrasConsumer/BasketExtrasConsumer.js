import React, { useContext } from 'react';
import Extras from '../Extras';
import BasketContext from '../BasketContext';

const BasketExtrasConsumer = () => {
    const { addExtra } = useContext(BasketContext);
    return (<Extras addExtra={addExtra} />);
};

export default BasketExtrasConsumer;
