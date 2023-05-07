import { StyleSheet, Text, View } from 'react-native';
import SignIn from '../components/SignIn';

const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <SignIn />
    </View>
 
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;