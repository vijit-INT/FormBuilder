// function MyComponent() {
//     const [myArray, setMyArray] = useState([{id: 1, name: 'item 1'}, {id: 2, name: 'item 2'}]);
  
//     const handleEdit = (id, newName) => {
//       // Find the index of the item to be edited
//       const index = myArray.findIndex(item => item.id === id);
  
//       // Create a new array with the updated item
//       const newArray = [...myArray];
//       newArray[index] = {...newArray[index], name: newName};
  
//       // Update the state with the new array
//       setMyArray(newArray);
//     }
  
//     return (
//       <div>
//         {myArray.map(item => (
//           <div key={item.id}>
//             {item.name}
//             <button onClick={() => handleEdit(item.id, 'new name')}>Edit</button>
//           </div>
//         ))}
//       </div>
//     );
//   }