import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import SpaceItem from '../SpaceItem'
import styles from './styles';
import space from './space'

const SpaceList= (props) => {
    return (
        <View style={styles.spaceContainer}>

            <ImageBackground source={require('../.././assets/images/1.jpg')} style={styles.image} />
            
            <View style={styles.titles}>
                <Text style={styles.subtitle}>UPCOMING TEST</Text>
                <Text style={styles.title}>STARSHIP SN9 HIGH-ALTITUDE FLIGHT TEST</Text>
            </View>

            <StyledButton />
        </View>
    )
}

export default SpaceItem;