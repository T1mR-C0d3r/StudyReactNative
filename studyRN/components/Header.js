import { Text, View, StyleSheet } from "react-native";

export default function Header ({title}) {

    return (

        <View style={styles.header}>
            <Text>Header - {title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    header: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },

})