import React, { useContext } from 'react';
import { View } from 'react-native';

//@ts-ignore
import Icon from 'react-native-ico-flags';


const questionHeight = 250;
const questionWidth = 250;
const Flag = ({country}: {country: string}) => {
    return (
        <View style={{
            backgroundColor: 'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(180,204,181,1) 100%);',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon name={country} height={questionHeight} width={questionWidth} />
        </View>
    );
};

export { Flag };