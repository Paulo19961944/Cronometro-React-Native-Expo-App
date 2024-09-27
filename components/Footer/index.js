import { View, Text } from "react-native";
import styles from "./style";

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Criado por Paulo Henrique Azevedo do Nascimento</Text>
        </View>
    )
}