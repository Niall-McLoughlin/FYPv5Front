// import { Button, Text, View, TextInput, StyleSheet, FlatList, ImageBackground } from 'react-native';
// import { useState, useEffect } from 'react';
// import Delete from './Delete';
// import { URL } from './config';


// const Fetch = ({ refresh }) => {
//   const [listData, setListData] = useState([]);

//   const callAPI = async () => {
//     try {
//       const res = await fetch(
//         URL,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             "ngrok-skip-browser-warning": "69420"
//           },
//           body: JSON.stringify({ testData: 'Test data sent to server' })
//         }
//       );
//       const data = await res.json();
//       const listItems = data.Products.map(product => ({
//         name: product.name,
//         price: product.price,
//         id: product.ourId
//       }));
//       setListData(listItems);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     callAPI();
//   }, [refresh]);






//   const renderItem = ({ item }) => (
//     <View style={styles.dataItem}>
//       <Text style={styles.title}>{item.name}</Text>
//       <Text>Price: €{item.price}</Text>
//       <Text>ID: {item.id}</Text>
//       <Delete productId={item.id} onDelete={() => callAPI()} />
//     </View>
//   );

//   return (
//     <View style={styles.fetchAll}>
//       {/* <Button
//         title="Refresh List "
//         onPress={async () => callAPI()}
//       /> */}
//       <FlatList
//         data={listData}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// export default Fetch;

// const styles = StyleSheet.create({
//   inputContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#311b6b',
//   },
//   textInput: {
//     height: 40,
//     marginTop: 10,
//     marginBottom: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: '#e4d0ff',
//     backgroundColor: '#bbbbbb',
//     borderRadius: 6,
//   },
//   dataItem: {
//     marginTop: 10,
//     marginBottom: 30,
//     marginLeft: 10,
//     marginRight: 10,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: 'blue',
//     backgroundColor: '#dddddd',
//     borderRadius: 6,
//   },
//   buttonContainer: {
//     margin: 10,
//   },
//   helperTextFetch: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#19a7d9',
//   },
//   helperTextAdd: {
//     color: '#19a7d9',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   b: {
//     width: 100,
//     marginHorizontal: 8,
//   },
//   buttonItem: {
//     padding: 8,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 20,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//   },

//     fetchAll: {
//       height: 350,
//         marginBottom: 25,
//       },
//     });
  
