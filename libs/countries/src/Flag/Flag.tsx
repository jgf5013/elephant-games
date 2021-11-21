import React from 'react';

//@ts-ignore
import Icon from 'react-native-ico-flags';

const questionHeight = 225;
const questionWidth = 225;
const Flag = ({country}: {country: string}) => {
    return (
        <Icon name={country} height={questionHeight} width={questionWidth} />
    );
};

export { Flag };