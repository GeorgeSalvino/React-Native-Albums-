import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import axios from 'axios';
import AlbumList from './AlbumList';

class Search extends Component {
    state = { albums: [], searchText: '', token: '' };

    componentWillMount() {
        const clientId = 'affcdb4085694b5389bbe89724470c13';
        const clientSecret = '1a7be4ff887c4943a7abc2d5be15ce6d';
        const encoded = 'YWZmY2RiNDA4NTY5NGI1Mzg5YmJlODk3MjQ0NzBjMTM6MWE3YmU0ZmY4ODdjNDk0M2E3YWJjMmQ1YmUxNWNlNmQ='
        const redirectUri = 'localhost:8888/callback';
        var accessToken = '';
        
        /*axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${encoded}`
            },
            data: JSON.stringify({
                grant_type: 'client_credentials'
            }),
        }).then(response => { console.log(response.data); })
        .catch(error => {
            console.log(error);
        });
        */
        const data = { grant_type: 'client_credentials' };


        const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

        fetch('https://accounts.spotify.com/api/token', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${encoded}`
            },
            body: formBody
        }).then((response) => response.json())
        .then((responseJson) => { console.log(responseJson)})
        .catch(error => {
            console.log(error);
        });

        //axios.get(`https://api.spotify.com/v1/search?q=album:${this.state.searchText}&type=album`, config)
        //.then(response => this.setState({ albums: response.data }));
    }


    render() {
        console.log();
        return (
        <View style={styles.InputCardStyle}>
            <TextInput 
                style={styles.InputStyle}
                placeholder="Search an album"
                onChangeText={(text) => this.setState({ searchText: text })}
            />
        </View>
        );
    }
    
    
}


const styles = {
    InputStyle: {
        height: 40,
        color: '#007aff',
        paddingTop: 5,
        backgroundColor: '#D5D8DC',
        borderRadius: 5,
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5
    },
    InputCardStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: '#EE3810',
        elevation: 70,
        position: 'relative',
        // Below is for iOS
        shadowOffset: { width: 10, height: 200 },
        shadowOpacity: 0.2
    }
};

export default Search;
