// import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
// import React, {useState} from 'react'
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// export default function Formulario() {

//     //DataPicker

//         const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//         const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
      
//         // Fecha
//         const showDatePicker = () => {
//           setDatePickerVisibility(true);
//         };
      
//         const hideDatePicker = () => {
//           setDatePickerVisibility(false);
//         };
//         const confirmarFecha = (date) => {
//             console.warn("A date has been picked: ", date);
//             hideDatePicker();
//           };
//         // Hora
//         const showTimePicker = () => {
//             setTimePickerVisibility(true);
//           };
        
//           const hideTimePicker = () => {
//             setTimePickerVisibility(false);
//           };
//           const confirmarHora = (date) => {
//             console.warn("A date has been picked: ", date);
//             hideTimePicker();
//           };
        
//   return (
//     <>
//     <View style={styles.formulario}>
//       <Text style={styles.label}>Paciente: </Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={(texto)=> console.log(texto)}
//       />
//     </View>
//     <View style={styles.formulario}>
//       <Text style={styles.label}>Dueño: </Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={(texto)=> console.log(texto)}
//       />
//     </View>
//     <View style={styles.formulario}>
//       <Text style={styles.label}>Telefono de contacto: </Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={(texto)=> console.log(texto)}
//         keyboardType='numeric'
//       />
//     </View>
//     <View style={styles.formulario}>
//       <Text style={styles.label}>Síntomas: </Text>
//       <TextInput
//       multiline
//         style={styles.input}
//         onChangeText={(texto)=> console.log(texto)}
//       />
//     </View>

//     <View style={styles.formulario}>
//       <Button title="Seleccione fecha" onPress={showDatePicker} />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={confirmarFecha}
//         onCancel={hideDatePicker}
//         locale='es_ES'
//         cancelTextIOS='Cancelar'
//         confirmTextIOS='Confirmar'
//       />
//     </View>
//     <View style={styles.formulario}>
//       <Button title="Seleccionar hora" onPress={showTimePicker} />
//       <DateTimePickerModal
//         isVisible={isTimePickerVisible}
//         mode="time"
//         onConfirm={confirmarHora}
//         onCancel={hideTimePicker}
//         locale='es_ES'
//         cancelTextIOS='Cancelar'
//         confirmTextIOS='Confirmar'
//       />
//     </View>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//     formulario: {
//         backgroundColor: '#FFF',
//         paddingHorizontal: 20,
//         paddingVertical: 20,
//     },
//     label: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginTop: 20
//     },
//     input: {
//         marginTop: 10,
//         height: 50,
//         borderColor: '#e1e1e1',
//         borderWidth: 1,
//         borderStyle: 'solid'
//     }
// })