import React from 'react';
import { FlatList, StyleSheet, TextInput, Button, View, ActivityIndicator } from 'react-native';
import MovieItem from '../movieItem/MovieItem'
import { search, findAllTrends } from '../../api/TMDBapi'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPage = 0;
        this.state = {
            films: [],
            isLoading: false
        };
    }

    _searchFilms() {
        this.setState({ isLoading: true })
        search(this.searchedText, this.page + 1).then(data => {
            if (this.totalPage != data.total_pages) {
                this.totalPage = data.total_pages;
                this.setState({
                    films: data.results,
                })
                this.flatListRef.scrollToOffset({ animated: false, offset: 0.1 });
            } else {
                this.setState({
                    films: [...this.state.films, ...data.results],
                })
            }
            this.setState({
                isLoading: false
            });
            this.page = data.page;
        })
    }

    _loadFilms() {
        if (this.searchedText != undefined && this.searchedText.length > 0) { // TODO Fixer recherche / trends function to get page number
            this._searchFilms();
        }
    }

        _displayLoading() {
            if (this.state.isLoading) {
                return (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size="large" />
                        {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                    </View>
                )
            }
        }

        _onClickSeeDetail = (id) => {
            console.log(id);
            this.props.navigation.navigate("FilmDetail", { idFilm: id });
        }

        render() {
            return (
                <View style={styles.container}>
                    <View >
                        <TextInput style={styles.textInput} placeholder="Ecrivez le titre du film"
                            onChangeText={(text) => this.searchedText = text}
                            onSubmitEditing={() => this._loadFilms()}></TextInput>
                        <Button style={styles.searchButton} title="Rechercher"
                            onPress={() => this._loadFilms()} />
                    </View>
                    <View>
                        <FlatList
                            ref={(ref) => { this.flatListRef = ref; }}
                            data={this.state.films} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) =>
                                <MovieItem film={item} onClickFunction={this._onClickSeeDetail}></MovieItem>}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                                this._loadFilms();
                            }} />
                    </View>
                    {this._displayLoading()}
                </View>

            )
        }
    }

    const styles = StyleSheet.create({
        container: {

        },
        textInput: {
            // marginTop:10,
            marginLeft: 5,
            marginRight: 5,
            height: 50,
            borderColor: 'black',
            borderBottomWidth: 1,
            paddingLeft: 5
        },
        searchButton: {
            color: 'red',
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: 'red'
        },
        loading_container: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })