import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(2);
    setBMI(roundedBMI);
    setStatus(getStatus(roundedBMI));
  };

  const getStatus = (bmi) => {
    const numericBMI = parseFloat(bmi);
    if (numericBMI < 16) {
      return 'Gầy độ III';
    } else if (numericBMI < 17) {
      return 'Gầy độ II';
    } else if (numericBMI < 18.5) {
      return 'Gầy độ I';
    } else if (numericBMI < 25) {
      return 'Bình thường';
    } else if (numericBMI < 30) {
      return 'Thừa cân';
    } else if (numericBMI < 35) {
      return 'Béo phì độ I';
    } else if (numericBMI < 40) {
      return 'Béo phì độ II';
    } else {
      return 'Béo phì độ III';
    }
  };

  const resetBMI = () => {
    setHeight('');
    setWeight('');
    setBMI(0);
    setStatus('');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#3498db' }]}>Chỉ số khối cơ thể (BMI)</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Chiều cao (cm)</Text>
        <TextInput
          style={[styles.input, styles.inputWithBackground]}
          placeholder="Nhập chiều cao"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cân nặng (kg)</Text>
        <TextInput
          style={[styles.input, styles.inputWithBackground]}
          placeholder="Nhập cân nặng"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>
      <Text style={[styles.bmi, { color: '#e74c3c' }]}>BMI: {bmi}</Text>
<Text style={[styles.status, { color: '#e74c3c' }]}>Tình trạng: {status}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tính" onPress={calculateBMI} />
        <View style={{ marginHorizontal: 10 }} />
        <Button title="Xóa" onPress={resetBMI} />
      </View>
      <Text style={[styles.title, { fontSize: 18, color: '#27ae60' }]}>Nguyễn Trọng Nghĩa</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    width: 150,
    margin: 10,
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
  },
  bmi: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputWithBackground: {
    backgroundColor: '#c7fcfc',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
