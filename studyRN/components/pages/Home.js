import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../Header'
import Content from '../Content';
import Footer from '../Footer';


export default function Home ({ navigation }) {

  const loadScene = () => {
    navigation.navigate('Second page')
  }

  return (

    <View style={styles.main}>

      <Content>
        
      </Content>

      <Pressable >
        <Text onPress={loadScene}>Open second page</Text>
      </Pressable>

      <Footer/>

    </View>

  )
}


const styles = StyleSheet.create({
  
    main: {
      flex: 1,
      borderColor: 'black',
      borderWidth: 2,
      padding: 5,
      margin: 5
    },
  
});