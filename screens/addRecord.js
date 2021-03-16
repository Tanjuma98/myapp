import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';

export default function AddRecord() {
    return (
        <View style={styles.container}>
            <Modal visible={false}>
                <View style={styles.modalContent}>
                <Text>AddRecord screen</Text>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});