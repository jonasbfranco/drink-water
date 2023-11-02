import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import React from 'react';

type ITabRoutes = {
    Settings: undefined;
    Dashboard: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs {}

export const Routes: React.FunctionComponent<IMyTabs>= props => {

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Settings" component={Screen} options={{
                title: "Configurações",
                tabBarIcon: () => <Icon name="setting" size={20} color="#6e6e6e" />
            }} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                title: "Dashboard",
                // tabBarBadge: 3,
                tabBarIcon: () => <Icon name="dashboard" size={20} color="#6e6e6e" />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                title: "Perfil",
                tabBarIcon: () => <Icon name="user" size={20} color="#6e6e6e" />
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}



const Screen = () => {
    return (
        <View style={{flex: 1, backgroundColor: generateRandomColorHexadecimal(), justifyContent: "center", alignItems: "center"}}>
            <Text>
                {Math.random()}
            </Text>
        </View>
    );
};


function generateRandomColorHexadecimal() {
    return "#" +  Math.floor(Math.random() * 16777215).toString(16);
}