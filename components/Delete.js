// // Delete.js

// import { Button } from 'react-native';
// import React, { useState } from 'react';
// import { URL } from './config';


// const Delete = ({ productId, onDelete }) => {
//   const [text, setText] = useState('');

//   const callAPIDELETESPECIFIC = async () => {
//     try {
//       const res = await fetch(
//         URL+`/deleteSpecificProduct`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             "ngrok-skip-browser-warning": "69420"
//           },
//           body: JSON.stringify({ ourID: productId })
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//       setText('Delete Successful!');

//       // Call the onDelete callback function after successful deletion
//       if (onDelete) {
//         onDelete();
//       }

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Button title="Delete" onPress={callAPIDELETESPECIFIC} />
//   );
// };

// export default Delete;
