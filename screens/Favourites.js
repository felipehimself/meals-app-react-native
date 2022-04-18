import MealsList from '../components/MealsList';
import { useGlobalContext } from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

function Favourites() {
  const { ids } = useGlobalContext();

  const favMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals!</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },

  text: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#030303',
  },
});
export default Favourites;
