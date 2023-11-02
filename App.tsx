import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
// import { StyleSheet, Text, View } from 'react-native';
// import { Dashboard } from './src/screens/Dashboard';
import { Routes } from './src/routes/routes';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <StatusBar style="auto" />
        <Routes />
        {/* <Dashboard /> */}
        </UserProvider>
    </NativeBaseProvider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
