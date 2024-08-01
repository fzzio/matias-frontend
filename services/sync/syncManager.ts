import { SurveyStore } from '@/store/survey';
import { syncCatechists } from './syncCatechists';
import { syncCatechumens } from './syncCatechumens';
import { syncLocations } from './syncLocations';
import { syncPeople } from './syncPeople';
import { syncSurveys } from './syncSurveys';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const syncManager = async (options = { forceFull: false }) => {
  try {
    await syncCatechists();
    await syncCatechumens("2024");
    await syncLocations();

    const surveys = await AsyncStorage.getItem('surveys');
    const pendingSurveys = surveys ? JSON.parse(surveys) : [];

    if (pendingSurveys.length > 0 || options.forceFull) {
      const people = SurveyStore.getRawState().people;
      await syncPeople(people);
      await syncSurveys();
    }

    console.log('All data synced successfully');
  } catch (error) {
    console.error('Error syncing all data:', error);
    throw error;
  }
};
