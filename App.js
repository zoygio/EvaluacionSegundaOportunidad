import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const questions = [
    { text: '¿Esta tarea es de Segunda Oportunidad?', answer: true },
    { text: '¿Si mezclas verde con Azul se pone Amarillo?', answer: false },
    { text: '¿Si se cae jabon se limpia el piso o se enucia el jabon? es verdad', answer: true },
    { text: '¿se uso react?', answer: true },
    { text: '¿para inicar se pone npx expo start en la terminal?', answer: true },
    { text: '¿Los perros vuelan?', answer: false },
    { text: '¿Giovanny es Alumno del Tecnm Campeche?', answer: true },
    { text: '¿Si le das siguiente se pasa a la primera prgunta?', answer: true },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      Alert.alert('Correcto', '¡Respuesta correcta!');
    } else {
      Alert.alert('Incorrecto', 'Respuesta incorrecta. Inténtalo de nuevo.');
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert('Fin del juego', 'Has respondido todas las preguntas.', [{ text: 'OK', onPress: resetGame }]);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(questions.length - 1);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Preguntapp</Text>
      </View>
      <View style={styles.containerWithBorder}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.buttonText}>Verdadero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
            <Text style={styles.buttonText}>Falso</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={[styles.navigationButton, { backgroundColor: 'gray', borderColor: 'gray' }]} onPress={goToPreviousQuestion}>
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navigationButton, { backgroundColor: 'gray', borderColor: 'gray' }]} onPress={goToNextQuestion}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerWithBorder: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  questionContainer: {
    padding: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#3498db',
    backgroundColor: '#3498db',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navigationButton: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
});
