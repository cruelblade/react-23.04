import React, { memo } from 'react';
//{ memo } = PureComponent в классах

function Example() {
    console.log('render');
    return <h3>Hello, Example!</h3>;
};

export default memo(Example);
