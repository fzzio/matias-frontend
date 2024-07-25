import * as React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Surface } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';
import { updateCatechists } from "@/store/survey";
import { SearchPeople } from '@/components/SearchPeople';
import { Person } from '@/types';
import { theme } from '@/styles/theme';
import { commonStyles, buttonStyles } from '@/styles';
import { Pagination } from '@/components/Pagination';

const GET_CATECHISTS = gql`
  query GetCatechists {
    getCatechists {
      id
      name
      lastName
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_CATECHISTS);
  const [selectedCatechists, setSelectedCatechists] = React.useState<Person[]>([]);

  const handleSubmit = () => {
    console.log('Form submitted index', { selectedCatechists });
    updateCatechists(selectedCatechists);
    router.push('/survey/step2');
  };

  if (loading) return <Text style={commonStyles.loadingText}>Cargando...</Text>;
  if (error) return <Text style={commonStyles.errorText}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Surface style={commonStyles.surface}>
        <Pagination currentStep={1} totalSteps={5} />
        <View style={commonStyles.headerTitle}>
          <Text style={commonStyles.title}>Encuesta</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.subtitle}>Seleccione los catequistas que harán ésta visita:</Text>
          <SearchPeople
            placeholder="Buscar catequistas"
            people={data.getCatechists}
            onSelectionChange={setSelectedCatechists}
            style={styles.searchPeople}
          />
        </View>
        <View style={commonStyles.footerButtons}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={selectedCatechists.length === 0 ? buttonStyles.disabledButton : buttonStyles.primaryButton}
            labelStyle={selectedCatechists.length === 0 ? buttonStyles.disabledButtonLabel : buttonStyles.primaryButtonLabel}
            disabled={selectedCatechists.length === 0}
          >
            Empezar
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push('/')}
            style={buttonStyles.secondaryButton}
            labelStyle={buttonStyles.secondaryButtonLabel}
          >
            Volver al Menú Principal
          </Button>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  body: {
    gap: 16,
  },
  subtitle: {
    ...commonStyles.subtitle,
    color: theme.colors.onSurface,
  },
  searchPeople: {
    marginBottom: 10,
  },
});