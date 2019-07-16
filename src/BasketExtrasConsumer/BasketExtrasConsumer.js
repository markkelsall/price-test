import React from 'react';
import Extras from '../Extras';
import { BasketConsumer } from '../BasketContext';

const BasketExtrasConsumer = () => {
    return (
        <BasketConsumer>
            {({ addExtra }) => (
                <Extras addExtra={addExtra} />
            )}
        </BasketConsumer>
    );
};

export default BasketExtrasConsumer;
