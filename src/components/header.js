// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#EE3810',
        elevation: 70,
        position: 'relative',
        // Below is for iOS
        shadowOffset: { width: 10, height: 200 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20,
        color: 'black'
    }
};

//Make the component available to other parts of the app
export default Header;
