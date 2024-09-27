import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 32,
        fontFamily: 'Jura-Bold',
        color: '#000',
        marginBottom: 24,
        marginTop: 248,
    },
    text:{
        fontSize: 32,
        fontFamily: 'Jura-Regular',
        textAlign: 'center',
        marginBottom: 32,
    },
    button:{
        backgroundColor: '#2d90c2',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 160,
    },
    buttonText:{
        color: '#e8e8e8',
        fontFamily: 'Jura-Bold',
    }
});

export default styles;