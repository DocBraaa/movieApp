import React from 'react';
import { View, Image, StyleSheet, Modal } from 'react-native';
import { getImage } from '../../api/TMDBapi';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class Cover extends React.Component{
    constructor(props){
        super(props);
    }  

    render(){
        return(
            <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={[{
                    url: getImage(this.props.navigation.getParam('path')) 
                }]}/>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'stretch'
    },
    image:{
        flex:1
    }



})