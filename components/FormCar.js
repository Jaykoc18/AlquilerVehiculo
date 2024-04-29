import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function RentaCarForm() {
    const [RentCarD, DataPiVi] = useState(false);
    const [EnvioDataV, EnvioDat] = useState(false);
    const [FechaAlquiler, Enviafecha] = useState(null);
    const [FechaEntrega, EntregaFecha] = useState(null);
    const [MetodoPago, EnvioFormaPago] = useState(false);
    const [SelecFormaPago, RecibeFormaPago] = useState('');
    const [CostoTotal, EnvioCostoTotal] = useState(0);
    const [TipoVehiculo, EnvioTipoCarro] = useState('');
    const [DropdownVisible, SetDropdownVisible] = useState(false);

    const MuetraRentaPicker = () => {
        DataPiVi(true);
    };

    const OcultaRentaDataPicker = () => {
        DataPiVi(false);
    };

    const MuestraEntrega = () => {
        EnvioDat(true);
    };

    const OcultaEntrega = () => {
        EnvioDat(false);
    };

    const ConfirmAlquiler = (date) => {
        Enviafecha(date);
        CalculaCostoT(date, FechaEntrega);
        OcultaRentaDataPicker();
    };

    const confirmaFechaEntrega = (date) => {
        EntregaFecha(date);
        CalculaCostoT(FechaAlquiler, date);
        OcultaEntrega();
    };

    const CalculaCostoT = (start, end) => {
        if (start && end) {
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            EnvioCostoTotal(days * 50);
        }
    };

    const formaPagoMetodo = () => {
        EnvioFormaPago(!MetodoPago);
    };

    const selecFormaPago = (method) => {
        RecibeFormaPago(method);
        EnvioFormaPago(false);
    };

    const selectTipoVehiculo = (type) => {
        EnvioTipoCarro(type);
        SetDropdownVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.formulario}>
                <Text style={styles.label}>Nombres: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => console.log(text)}
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Apellidos: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => console.log(text)}
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Cédula: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => console.log(text)}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Correo Electrónico: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => console.log(text)}
                    keyboardType='email-address'
                />
            </View>
            <View style={styles.formulario}>
                <TouchableOpacity style={styles.BotonDesplegable} onPress={() => SetDropdownVisible(!DropdownVisible)}>
                    <Text style={styles.buttonText}>{TipoVehiculo ? TipoVehiculo : 'Selecciona tipo de vehículo'}</Text>
                </TouchableOpacity>
                {DropdownVisible && (
                    <View style={styles.desplega}>
                        <TouchableOpacity style={styles.desplegaItem} onPress={() => selectTipoVehiculo('Sedan')}>
                            <Text style={styles.desplegaItemTexto}>Sedan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.desplegaItem} onPress={() => selectTipoVehiculo('Hatchback')}>
                            <Text style={styles.desplegaItemTexto}>Hatchback</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.desplegaItem} onPress={() => selectTipoVehiculo('Camioneta')}>
                            <Text style={styles.desplegaItemTexto}>Camioneta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.desplegaItem} onPress={() => selectTipoVehiculo('SUV')}>
                            <Text style={styles.desplegaItemTexto}>SUV</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.desplegaItem} onPress={() => selectTipoVehiculo('Furgoneta')}>
                            <Text style={styles.desplegaItemTexto}>Furgoneta</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Tipo de Vehículo seleccionado: </Text>
                <TextInput
                    style={styles.input}
                    value={TipoVehiculo}
                    editable={false}
                />
            </View>
            <View style={styles.formulario}>
                <TouchableOpacity style={styles.button} onPress={MuetraRentaPicker}>
                    <Text style={styles.buttonText}>Selecciona fecha de alquiler</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de Alquiler"
                    value={FechaAlquiler ? FechaAlquiler.toLocaleDateString() : ""}
                    editable={false}
                />
                <DateTimePickerModal
                    isVisible={RentCarD}
                    mode="date"
                    onConfirm={ConfirmAlquiler}
                    onCancel={OcultaRentaDataPicker}
                    locale='es_ES'
                    cancelTextIOS='Cancelar'
                    confirmTextIOS='Confirmar'
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Día de Entrega de Vehiculo: </Text>
                <TouchableOpacity style={styles.button} onPress={MuestraEntrega}>
                    <Text style={styles.buttonText}>Selecciona fecha de entrega</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de Entrega"
                    value={FechaEntrega ? FechaEntrega.toLocaleDateString() : ""}
                    editable={false}
                />
                <DateTimePickerModal
                    isVisible={EnvioDataV}
                    mode="date"
                    onConfirm={confirmaFechaEntrega}
                    onCancel={OcultaEntrega}
                    locale='es_ES'
                    cancelTextIOS='Cancelar'
                    confirmTextIOS='Confirmar'
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Total a Pagar en Dólares: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Total a Pagar"
                    value={`$ ${CostoTotal}`}
                    editable={false}
                />
            </View>
            <View style={styles.formulario}>
                <TouchableOpacity style={styles.botonPago} onPress={formaPagoMetodo}>
                    <Text style={styles.textoBtnPago}>Selecciona tu Forma de Pago</Text>
                </TouchableOpacity>
                {MetodoPago && (
                    <View style={styles.opcionesPago}>
                        <TouchableOpacity style={styles.opcionBtnPago} onPress={() => selecFormaPago('Efectivo')}>
                            <Text style={styles.textoOpciPago}>Efectivo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.opcionBtnPago} onPress={() => selecFormaPago('Transferencia')}>
                            <Text style={styles.textoOpciPago}>Transferencia</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.opcionBtnPago} onPress={() => selecFormaPago('Tarjeta de Crédito')}>
                            <Text style={styles.textoOpciPago}>Tarjeta de Crédito</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Forma de Pago"
                    value={SelecFormaPago}
                    editable={false}
                />
            </View>
            <View style={styles.formulario}>
                <TouchableOpacity style={styles.btnEnvio} onPress={() => console.log("Enviar solicitud")}>
                    <Text style={styles.textoBtnEnvio}>Enviar solicitud de alquiler</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 20, 
    },
    formulario: {
        backgroundColor: '#F2F3F8',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#CCCCCC',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
    },
    BotonDesplegable: {
        backgroundColor: '#CCCCCC',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    desplega: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 10,
    },
    desplegaItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    desplegaItemTexto: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    botonPago: {
        backgroundColor: '#CCCCCC',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    textoBtnPago: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
    },
    opcionesPago: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    opcionBtnPago: {
        paddingVertical: 10,
    },
    textoOpciPago: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    btnEnvio: {
        backgroundColor: '#007bff', 
        borderRadius: 25, 
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
        borderWidth: 2, // grosor del borde
        borderColor: '#0F062A', // Color del borde 
        alignItems: 'center', // Alineación del contenido al centro
        justifyContent: 'center', // Alineación del contenido al centro
    },
    textoBtnEnvio: {
        color: '#fff', 
        fontSize: 20,
        fontWeight: 'bold',
    }
    
});
