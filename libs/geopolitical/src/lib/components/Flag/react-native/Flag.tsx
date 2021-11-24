import React, { useContext } from 'react';

//@ts-ignore
import Icon from 'react-native-ico-flags';
 
import { AppContext } from '@elephant-games/game';

const questionHeight = 225;
const questionWidth = 225;
const Flag = ({country}: {country: string}) => {
    const context = useContext(AppContext);
    return (
        <Icon name={country} height={questionHeight} width={questionWidth} />
    );
};

export { Flag };