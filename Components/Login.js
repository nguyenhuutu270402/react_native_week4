import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(username === 'nguyenbaodai109' && password === 'ngocphuong1208') {
      alert('Login Successfully!');
    } else {
      alert('Login Failure');
    }
  }
    
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FBCB00', '#BF9A00']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.linearGradient}
      >
        <Text style={styles.heading}>LOGIN</Text>
        <View style={styles.textInputContainer}>
          <Icon name='user' size={37} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={username}
            onChangeText={(test) => setUsername(test)}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Icon name='lock' size={40} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(test) => setPassword(test)}
          />
          <Icon name='eye' size={35} style={styles.eyeIcon} />
        </View>
        <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText} >LOGIN</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </LinearGradient>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    fontSize: 30,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d8b93b',
    width: 360,
    height: 55,
    borderWidth: 1,
    borderColor: '#e8d897',
    marginTop: 18,
  },
  icon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    width: 360,
    height: 50,
    backgroundColor: '#060000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
  },
  createAccountText: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 50,
  },
});