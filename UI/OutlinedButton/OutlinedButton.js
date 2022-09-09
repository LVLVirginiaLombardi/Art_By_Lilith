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
                name={icon} s
                ize={20} 
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
        paddingVertical: 6,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        backgroundColor: COLORS.MAROON
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: COLORS.primary
    },
});