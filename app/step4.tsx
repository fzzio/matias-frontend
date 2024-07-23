import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Text, Divider } from 'react-native-paper';
import { SurveyStore, clearSurvey } from '@/store/survey';
import { Pagination } from '@/components/Pagination';
import LottieView from 'lottie-react-native';
import { useSacraments } from '@/hooks/useSacraments';
import { PersonInput } from '@/types';

export default function Step4() {
  const router = useRouter();
  const { catechists, selectedLocation, householdSize, catechumens, otherPeople, observations } = SurveyStore.useState();
  const { getSacramentNameById } = useSacraments();

  const handleFinish = () => {
    // Placeholder for the API call
    console.log('Finalizing Survey');

    // Clear the survey data
    clearSurvey();

    // Navigate back to the home screen
    router.push('/');
  };

  const renderPersonInfo = (person: PersonInput, index: number) => (
    <View key={`${person.id}_${index}`} style={styles.personContainer}>
      <Text variant="titleMedium">{person.name} {person.lastName}</Text>
      <Text>Cédula: {person.idCard || 'N/A'}</Text>
      <Text>Fecha de Nacimiento: {person.birthDate ? person.birthDate.toISOString().split('T')[0] : 'N/A'}</Text>
      <Text>Sacramentos: {person.sacraments.map(getSacramentNameById).join(', ') || 'N/A'}</Text>
      <Text>Voluntario: {person.isVolunteer ? 'Sí' : 'No'}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Pagination currentStep={4} totalSteps={4} />
      <LottieView
        source={require("../assets/lottiefiles/1720857631441.json")}
        style={styles.headerLottieImage}
        autoPlay
        loop
      />
      <Text variant="headlineMedium">Revisión de la Información</Text>

      <Text variant="titleSmall">Catequistas</Text>
      {catechists.map((catechist, index) => (
        <Text key={`${catechist.id}_${index}`}>{catechist.name} {catechist.lastName}</Text>
      ))}
      <Divider style={styles.divider} />

      <Text variant="titleSmall">Ubicación Seleccionada</Text>
      <Text>{selectedLocation?.name || 'N/A'}</Text>
      <Divider style={styles.divider} />

      <Text variant="titleSmall">Tamaño del Hogar</Text>
      <Text>{householdSize}</Text>
      <Divider style={styles.divider} />

      <Text variant="titleLarge">Catequizandos</Text>
      {catechumens.map((person, index) => renderPersonInfo(person, index))}
      <Divider style={styles.divider} />

      <Text variant="titleLarge">Otras Personas</Text>
      {otherPeople.map((person, index) => renderPersonInfo(person, index + catechumens.length))}
      <Divider style={styles.divider} />

      <Text variant="titleLarge">Observaciones</Text>
      <Text>{observations}</Text>
      <Divider style={styles.divider} />

      <View style={styles.footer}>
        <Button onPress={() => router.back()}>Atrás</Button>
        <Button
          mode="contained"
          onPress={handleFinish}
        >
          Finalizar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  personContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  headerLottieImage: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  divider: {
    marginTop: 10,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});