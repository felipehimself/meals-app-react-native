import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

// por ser uma rota definida no stack, tem acesso ao parametro route e navigation por padrão,
// que retorna os parametros que chegaram na rota
function MealsOverviewScreen({ navigation, route }) {
  // const rout = useRoute()
  // console.log(rout.params)

  const id = route.params.id;

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(id) !== -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === id).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return <MealsList items={displayMeals} />;
}

export default MealsOverviewScreen;
