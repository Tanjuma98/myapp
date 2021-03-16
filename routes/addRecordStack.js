import { createStackNavigator } from 'react-navigation-stack';
import AddRecord from '../screens/addRecord';
import RecordDetails from '../screens/recordDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    AddRecord: {
        screen: AddRecord,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='AddRecords' />,
            }
        }
    },
    RecordDetails: {
        screen: RecordDetails,
        navigationOptions: {
            title: 'Record Details'
        }
    }
}

const AddRecordStack = createStackNavigator(screens,
    { defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AddRecordStack;