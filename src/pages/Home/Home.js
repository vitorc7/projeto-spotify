

import React from "react";
import {View, Text, TouchableOpacity,Image,ScrollView} from 'react-native';
import Header from "../../components/Header";
import Texto from "./style";
import LinearGradient from 'react-native-linear-gradient';




const Background = ({ children }) => {
    return (
        <LinearGradient colors={['#006400', '#000']} style={Texto.Fundo}>
            {children}
        </LinearGradient>

    );
};


const Home = () => {
    return (
        <View >
           <Background/>
            <Header/>
            <View style={Texto.container}>
                <Text style={Texto.linha}>Quer novas playlists?Escolha</Text>
                <Text style={Texto.linha}>algumas musicas que você</Text>
                <Text style={Texto.linha}>gosta.</Text>
            </View>
            <TouchableOpacity style={Texto.button}>
             <Text style={Texto.buttonText}>ESCOLHER ARTISTA</Text>
            </TouchableOpacity>
            <Text style={Texto.titulo}>Seu astral</Text>
        <ScrollView horizontal={true}>
            <Image style={Texto.fotos} source={require ('../../img/444.jpg')}></Image>
            <Image style={Texto.fotos} source={require ('../../img/download.jpg')}></Image>
            <Image style={Texto.fotos} source={require ('../../img/taylor1989.webp')}></Image>
            <Image style={Texto.fotos} source={require ('../../img/ar.jpg')}></Image>
            <Image style={Texto.fotos}source={require ('../../img/aaaaaaaa.jpg')}></Image>

        </ScrollView>
        <Text style={Texto.titulo}>Top Sertanejo</Text>
        <ScrollView horizontal={true}>
            
            <Image style={Texto.fotos} source={ require('../../img/vl.jpg')}></Image>
            <Image style={Texto.fotos} source={ require('../../img/m.jpg')}></Image>
            <Image style={Texto.fotos} source={ require('../../img/s.jpg')}></Image>
            <Image style={Texto.fotos} source={ require('../../img/b.jpg')}></Image>
            <Image style={Texto.fotos} source={ require('../../img/asp.jpg')}></Image>
        </ScrollView>
            

            
         </View>
    );
 
};

export default Home;