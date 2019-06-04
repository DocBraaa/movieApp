import React from 'react';
import { StyleSheet, TextInput, Text, Button, View, Image,TouchableOpacity } from 'react-native';
import { getImage } from '../../api/TMDBapi'
export default class MovieItem extends React.Component {


    constructor(props){
        super(props);
    }
    
    render() {
        const { film, onClickFunction } = this.props;
        return (
            <TouchableOpacity onPress={() => onClickFunction(film.id)} style={styles.container}>
                    <Image style={styles.img} source={{uri: getImage(film.poster_path)}}/>
                <View style={styles.description}>
                    <View style={styles.titleContainer}>
                        <Text style={{flex: 2,flexWrap:'wrap'}}>{film.title}</Text>
                        <Text style={{flex:1, textAlign:'right' }}>{film.vote_average}</Text>
                    </View>
                    <View style={{ flex: 2, marginBottom: 10 }}>
                        <Text numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={{ flex: 1 }}>

                        <Text>Sortie le {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        margin: 5,
        marginBottom: 10
    },
    img: {
        height: 180,
        width: 120,
        backgroundColor: 'gray'
    },
    titleContainer: { 
        flexDirection: 'row',
        alignItems:'center',
        flex: 1,
        marginBottom: 10, 
    },
    description: {
        flex: 2,
        padding:10,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    }
})


function reduce(str) {
    return str.slice(0, 50) + ' ...';
}
