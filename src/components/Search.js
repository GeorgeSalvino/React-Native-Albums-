import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import AlbumList from './AlbumList';

class Search extends Component {
    state = { albums: [], searchText: 'Sempiternal', token: '' };

    albumSearch(text) {
        const encoded = 'YWZmY2RiNDA4NTY5NGI1Mzg5YmJlODk3MjQ0NzBjMTM6MWE3YmU0ZmY4ODdjNDk0M2E3YWJjMmQ1YmUxNWNlNmQ='

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
        .then((responseJson) => { this.setState({ token: responseJson.access_token }); })
        .then(() => 
            fetch(`https://api.spotify.com/v1/search?q=album:${text}&type=album`, {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${this.state.token}`
                }
            })
        .then((response) => response.json())
        .then((responseJson) => { this.setState({ albums: responseJson }); })
        .then(
            <AlbumList albums={this.state.albums.albums} />
        )
        .catch(error => {
            console.log(error);
        }));
    }

    render() {
        console.log(this.state.albums.albums);
        return (
        <View style={styles.InputCardStyle}>
            <TextInput 
                style={styles.InputStyle}
                placeholder="Search an album"
                onSubmitEditing={(event) => this.albumSearch(event.nativeEvent.text)} 
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
