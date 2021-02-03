import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>WATCH</Text>
        </View>
    )
};

export default StyledButton;