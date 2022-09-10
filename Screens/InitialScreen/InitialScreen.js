import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import {COLORS} from '../../Constants/Colors';
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";

const backgroundimage = require('../../assets/Logo/backgroundImage.jpg');
const logoImage = require('../../assets/Logo/logotipo_nuevo.png');

const InitialScreen = ({ navigation }) => {

    const handleScreen = () => {
        navigation.navigate('Auth');
    }

    return(
        <ImageBackground source={backgroundimage} style={styles.backgroundimage}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.logoText}>LILITH´S ART</Text>
                </View>
                <Image style={styles.logoImage} source={logoImage}></Image>
            </View>
                <View>
                    <OutlinedButton icon={"enter"} onPress={handleScreen}>Let´s Start...</OutlinedButton>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundimage: {
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
    },
    textContainer: {
        
    },
    logoText: {
        marginBottom: 30,
        fontSize: 35,
        fontFamily: 'RobotoLight',
        color: COLORS.primary

    },
    logoImage: {
        width: '100%',
        height: '50%',
        marginBottom: 20,
        marginTop: 50
    },
})

export default InitialScreen;