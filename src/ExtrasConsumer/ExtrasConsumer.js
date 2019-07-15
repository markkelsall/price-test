import React from 'react';
import Extras from '../Extras';
import { PriceConsumer } from '../PriceContext';

const ExtrasConsumer = () => {
    return (
        <PriceConsumer>
            {({ addExtra }) => (
                <Extras addExtra={addExtra} />
            )}
        </PriceConsumer>
    );
};

export default ExtrasConsumer;