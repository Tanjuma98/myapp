import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default function RecordForm() {
    return(
        <View style={styles.container}>
            <Formik
              initialValues={{ name: '', length: '', unit: ''}}
              onSubmit={(values) => {
                  console.log(values);
              }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                          style={styles.input}
                          placeholder='Object Name'
                          onChangeText={props.handleChange('name')}
                          value={props.values.name} 
                        />
                        <TextInput 
                          style={styles.input}
                          placeholder='Length/Width'
                          onChangeText={props.handleChange('length')}
                          value={props.values.length}
                          keyboardType='numeric'
                        />
                        <TextInput 
                          style={styles.input}
                          placeholder='in/ft/cm/mm'
                          onChangeText={props.handleChange('unit')}
                          value={props.values.unit} 
                        />
                        <Button title='Add' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    }
});