import { Text, View, StyleSheet } from "react-native";

export default function Footer () {

    return (

        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>

    )
}

const styles = StyleSheet.create ({

    footer: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
})