import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Dimensions} from 'react-native';
import * as React from 'react';
import { useState } from "react";
import { ScrollView } from 'react-native';
import { CheckBox } from "react-native-elements";


const Lab2c = () => {
  const [isCheckedLowerCase, setIsCheckedLowerCase] = useState(false);
  const [isCheckedUpperCase, setIsCheckedUpperCase] = useState(false);
  const [isCheckedNumber, setIsCheckedNumber] = useState(false);
  const [isCheckedSpecialSymbol, setIsCheckedSpecialSymbol] = useState(false);
  const [passwordLength, setPasswordLength] = useState('6');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const toggleCheckLowerCase = () => {
    setIsCheckedLowerCase(!isCheckedLowerCase);
  };

  const toggleCheckUpperCase = () => {
    setIsCheckedUpperCase(!isCheckedUpperCase);
  };

  const toggleCheckNumber = () => {
    setIsCheckedNumber(!isCheckedNumber);
  };

  const toggleCheckSpecialSymbol = () => {
    setIsCheckedSpecialSymbol(!isCheckedSpecialSymbol);
  };

  const generatePassword = () => {
    const charset = [];

    if (isCheckedLowerCase) {
      charset.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (isCheckedUpperCase) {
      charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (isCheckedNumber) {
      charset.push("0123456789");
    }
    if (isCheckedSpecialSymbol) {
      charset.push("!@#$%^&*()_+-=[]{}|;:,.<>?");
    }

    if (charset.length === 0) {
      alert("Please select one option at least for the password!");
      return;
    }

    const password = [];
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomCharsetIndex = Math.floor(Math.random() * charset.length);
      const selectedCharset = charset[randomCharsetIndex];
      const randomCharIndex = Math.floor(
        Math.random() * selectedCharset.length
      );
      const randomChar = selectedCharset[randomCharIndex];
      password.push(randomChar);
    }

    const generatedPassword = password.join("");
    setGeneratedPassword(generatedPassword);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.div_father}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            PASSWORD GENERATOR
          </Text>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={generatedPassword}
            editable={false}
          />
        </View>
        <View style={styles.conditionContainer}>
          <Text style={styles.text_condition}>
            Password length
          </Text>
          <Text style={styles.text_condition}>
            Include lowercase letters
          </Text>
          <Text style={styles.text_condition}>
            Include uppercase letters
          </Text>
          <Text style={styles.text_condition}>
            Include numbers
          </Text>
          <Text style={styles.text_condition}>
            Include special symbols
          </Text>
        </View>
        <View style={styles.div_checkbox}>
          <CheckBox
            checked={isCheckedLowerCase}
            onPress={toggleCheckLowerCase}
            size={30}
            checkedColor="white"
            uncheckedColor="white"
          />
          <CheckBox
            checked={isCheckedUpperCase}
            onPress={toggleCheckUpperCase}
            size={30}
            checkedColor="white"
            uncheckedColor="white"
          />
          <CheckBox
            checked={isCheckedNumber}
            onPress={toggleCheckNumber}
            size={30}
            checkedColor="white"
            uncheckedColor="white"
          />
          <CheckBox
            checked={isCheckedSpecialSymbol}
            onPress={toggleCheckSpecialSymbol}
            size={30}
            checkedColor="white"
            uncheckedColor="white"
          />
        </View>
        <TouchableOpacity
          onPress={generatePassword}
          style={styles.generateButton}
        >
          <Text style={styles.generateButtonText}>
            GENERATE PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Lab2c;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#6060a8",
    justifyContent: "center",
    width: Dimensions.get('window').width,
  },
  div_father: {
    width: 350,
    height: 630,
    backgroundColor: "#23235b",
    borderRadius: 10,
    alignSelf: "center",
  },
  header: {
    width: "90%",
    height: 140,
    backgroundColor: "#23235b",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
    alignSelf: "center",
  },
  conditionContainer: {
    width: "70%",
    height: 300,
    backgroundColor: "#23235b",
    alignSelf: "center",
    marginTop: 30,
    marginLeft: -36,
    flexDirection: "column",
  },
  text_condition: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    lineHeight: 62,
  },
  div_checkbox: {
    width: 80,
    height: 230,
    backgroundColor: "#23235b",
    flexDirection: "column",
    top: -255,
    left: 265,
    alignItems: "center",
  },
  checkbox: {
    width: 40,
    height: 40,
    margin: 17,
  },
  passwordContainer: {
    width: "90%",
    height: 50,
    backgroundColor: "#151537",
    alignSelf: "center",
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  generateButton: {
    marginTop: -230,
    backgroundColor: "#3B3B98",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    width: "85%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
