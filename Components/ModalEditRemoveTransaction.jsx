import React, {useState} from 'react'
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

export const ModalEditRemoveTransaction = ({viewModal, setViewModal, transaction, onEdit, onDelete}) => {
    const [value, setValue] = useState(transaction.value);
    const [description, setDescription] = useState(transaction.description);
    const [date, setDate] = useState(transaction.date);
    const [msg, setMsg] = useState("");

    const handleValueChange = (value) => {
        console.log(value);
        setValue(value)
    }

    const handleDescriptionChange = (description) => {
        setDescription(description);
    }

    const validateTransaction = () => {
        //FALTAN LAS VALIDACIONES
        if(value === "" || description === "" || date === ""){
            console.log("HAY QUE RELLENAR LOS DATOS");
            setMsg("Debe rellenar todos los datos!!")
            return;
        }
        handleSubmit();
        setValue("");
        setDescription("");
        setDate("");
        setMsg("");
        setViewModal(false);
    }

    const handleSubmit = () => {
        onEdit(transaction.id, value, description, date);
    }
  return (
    <Modal visible={viewModal} animationType={"slide"} transparent={true}>
        <View style={styles.inputBookGroup}>
            <TextInput 
            style={styles.textInput}
            placeholder='importe'
            placeholderTextColor={'#BB86FC'}
            value={value}
            onChangeText={handleValueChange}
            />
            <TextInput 
            style={styles.textInput}
            placeholder='descripción'
            placeholderTextColor={'#BB86FC'}
            value={description}
            onChangeText={handleDescriptionChange}
            />
            <DatePicker
            style={styles.textInput}
            date={date}
            mode="date"
            placeholder="Seleccionar fecha"
            format="DD/MM/YYYY"
            minDate="01-01-2022"
            maxDate="01-01-2023"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    right: -5,
                    top: 4,
                    marginLeft: 0,
                },
                dateInput: {
                    borderColor : "#BB86FC",
                    alignItems: "flex-start",
                    borderWidth: 0,
                    borderBottomWidth: 1,
                },
                placeholderText: {
                    color: "#BB86FC"
                },

            }}
    
            onDateChange={(date) => {
                setDate(date);
            }}
            />
            <TextInput 
            style={styles.text}
            placeholderTextColor={'#BB86FC'}
            value={msg}
            disabled
            />
            <TouchableOpacity onPress={() => validateTransaction()}>
                <View>
                    <View style={styles.btnSave}>
                        <Image source={require("../Icons/save.png")} style={styles.tinyIcon}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(transaction.id)}>
                <View>
                    <View style={styles.btnSave}>
                        <Image source={require("../Icons/delete.png")} style={styles.tinyIcon}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputBookGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        flex: 1,
        backgroundColor: "rgba(0,0,0, 0.7)",
    },
    
    textInput: {
        borderBottomColor: "#BB86FC",
        borderBottomWidth: 1,
        height: 40,
        width: "75%",
        color: "#BB86FC",
    },
    btnSave: {
        backgroundColor: "#BB86FC",
        width: 40,
        height: 40,
        borderRadius: 5,
        marginTop: 10
        // justifyContent: 'center'
    },

    tinyIcon: {
        width:40,
        height: 40,
    },
    
    text: {
        color: "red"
    }
})