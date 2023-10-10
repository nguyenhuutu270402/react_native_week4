import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const Lab2b = () => {
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = () => {
    console.log('Feedback sent:', feedback);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centered}>
        <Image
          source={require('../img/USB.png')}
          style={{ height: 80, width: 380 }}
        />
      </View>

      <Text style={styles.heading}>Cực kỳ hài lòng</Text>

      <View style={styles.starContainer}>
        {Array(5).fill().map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={39}
            color="#f2dd1b"
            style={styles.starIcon}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.uploadButton}>
        <Icon name="camera" size={39} color="black" style={styles.cameraIcon} />
        <Text style={styles.uploadText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackLabel}>
          Hãy chia sẻ những điều bạn thích về sản phẩm
        </Text>
        <Text style={styles.linkText}>https://meet.google.com/nsj-ojwi-xpp</Text>
        <TextInput
          numberOfLines={null}
          multiline
          style={styles.feedbackInput}
          value={feedback}
          onChangeText={text => setFeedback(text)}
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
        <Text style={styles.sendButtonText}>Gửi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Lab2b;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 90,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 300,
  },
  starIcon: {
    fontSize: 39,
    color: '#f2dd1b',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1511EB',
    borderRadius: 10,
    backgroundColor: 'white',
    width: 330,
    height: 70,
    justifyContent: 'center',
    marginTop: 90,
  },
  cameraIcon: {
    marginRight: 25,
  },
  uploadText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  feedbackContainer: {
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 5,
    width: 330,
    height: 240,
    marginTop: 20,
  },
  feedbackLabel: {
    fontSize: 18,
    padding: 12,
    fontWeight: '700',
    lineHeight: 21.1,
  },
  linkText: {
    marginTop: 140,
    padding: 10,
    alignSelf: 'flex-end',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 21.1,
    color: '#C4C4C4',
  },
  feedbackInput: {
    minWidth: 300,
    minHeight: 160,
    fontSize: 20,
    fontWeight: '500',
    height: 160,
    marginLeft: 15,
    marginRight: 15,
  },
  sendButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#1511EB',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#0D5DB6',
    width: 330,
    height: 45,
    alignSelf: 'center',
  },
  sendButtonText: {
    textAlign: 'center',
  },
});
