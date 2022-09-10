import { Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from '../../Constants/Colors';
import { Ionicons } from "@expo/vector-icons";

const OutlinedButton = ({ onPress, icon, children }) => {

    return(
        <Pressable 
            style={({ pressed }) => [styles.button, pressed && styles.pressed]} 
            onPress={onPress}
        >
            <Ionicons 
                style={styles.icon} 
                name={icon} 
                size={24} 
                color={COLORS.primary} 
            />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
        marginLeft: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        backgroundColor: COLORS.gold,
        width: '90%'
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 12
    },
    text: {
        color: COLORS.primary,
        fontFamily: 'RobotoMedium',
        fontSize: 18,
    },
});