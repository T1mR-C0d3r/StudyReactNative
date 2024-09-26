import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function Content () {
    
    return (

        <ScrollView style={styles.contentBox}>
            <View style={styles.content}>
                <Text >Cotent</Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create ({

    contentBox: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        margin: 5
      },

    content: {
        justifyContent: 'center',
        alignItems: 'center',
      }

})