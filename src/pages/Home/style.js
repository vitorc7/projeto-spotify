
import {StyleSheet} from "react-native";


const Texto = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",

    },
    linha: {
        fontSize:20,
        color: "#000",
       
    },
    bdddd: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 300,
            marginTop: 16,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 14,
        height: 48,
        borderRadius: 6,
        margin: 10,
        marginLeft: 50,
        marginRight:50,
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 15,
    },
    Fundo:{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    
    },
    titulo:{
        fontSize:30,
        marginTop:25,
        marginBottom:15,
        color: '#B0C4DE'
    },
    fotos:{
        width: 200,
        height: 200,
        marginLeft: 15,
        marginRight: 15,

    }
});




export default Texto;