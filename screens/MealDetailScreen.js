import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { useEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconBtn from '../components/IconBtn';

import { useGlobalContext } from '../store/context/favorite-context';

function MealDetailScreen({ route, navigation }) {
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id == id);

  const { ids, removeFav, addFav } = useGlobalContext();

  const mealIsFav = ids.includes(id);

  function changeFavStatus() {
    if (mealIsFav) {
      removeFav(id);
    } else {
      addFav(id);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconBtn
            onPressAction={changeFavStatus}
            icon={mealIsFav ? 'star' : 'star-outline'}
            color='red'
          />
        );
      },
    });
  }, [navigation, changeFavStatus, mealIsFav]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          propStyle={styles.detailtext}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
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
