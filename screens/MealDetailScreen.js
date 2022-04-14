import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';

function MealDetailScreen({ route, navigation }) {
  const [meal, setMeal] = useState({});
  const id = route.params.id;

  useEffect(() => {
    const selectedMeal = MEALS.find((meal) => meal.id == id);
    setMeal(selectedMeal);

    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [route, id]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetail
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          propStyle={styles.detailtext}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={meal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={meal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    //flex: 1,
    //marginBottom: 15,
  },

  container: {
    flex: 1,
    //margin: 16,
marginBottom: 15,

  },

  image: {
    width: '100%',
    height: 340,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#333',
  },

  detailtext: {
    fontSize: 16,
  },

  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '90%',
  },
});
export default MealDetailScreen;
