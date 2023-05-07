import { StyleSheet, Text, View } from 'react-native';

const AddItemScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Watched Screen</Text>
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

  export default AddItemScreen;