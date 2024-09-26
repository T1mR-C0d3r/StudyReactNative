import { Button, StyleSheet, View } from 'react-native';
import Header from '../Header'
import Content from '../Content';
import Footer from '../Footer';


export default function SecondPage ({ navigation }) {

  //const someFunction = () => {
  //  navigation.goBack()
  //}

  return (

    <View style={styles.main}>

      <Content/>

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