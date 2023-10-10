import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './Components/Login';
import Lab2b from './Components/Lab2b';
import Lab2c from './Components/Lab2c';
// const handleLogin = () => {
//   console.log('Login button pressed');
// };

const App = () => {
  return(
<View>
  {/* <Login onPessLogin = {handleLogin}></Login> */}
  {/* <Lab2b></Lab2b> */}
  <Lab2c></Lab2c>
</View>
  )
}
export default App;

