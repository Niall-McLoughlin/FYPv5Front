import { Button, Text, View, TextInput, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useState } from 'react';
import FetchPantry from '../components/FetchPantry';
import AddPantry from '../components/AddPantry';
import FlashMessage from 'react-native-flash-message';

const PantryScreen = ({ navigation }) => {
  const [refresh, setRefresh] = useState(false);

  const handleItemAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <View>
      
      <FetchPantry refresh={refresh} />
      <FlashMessage position="top" floating={true} />
    </View>
  );
};

export default PantryScreen;

