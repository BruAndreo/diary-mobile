import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Login(props) {
    return (
        <View>
            <Text>Olá Login</Text>
            <Button
                title='Go to Home' 
                onPress={() => props.navigation.navigate('Home')} />
        </View>
    );
}