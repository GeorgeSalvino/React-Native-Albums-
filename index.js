// Import a libray to help creat a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import Search from './src/components/Search';

//Create a component
const App = () => (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <Search />
            <AlbumList />
        </View>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
