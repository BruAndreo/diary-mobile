import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home(props) {
    return (
        <View>
            <Text>Olá Home</Text>
            <Button
                title='Go to Login' 
                onPress={() => props.navigation.navigate('Login')} />
        </View>
    );
}