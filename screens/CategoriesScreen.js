import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

function CategoriesScreen({ navigation }) {

  function pressHandler(id) {
    // quando vou para a rota Mealsoverview, passo um params que é o id
    // com isso, ao renderizar o Mealsoverview, tenho acesso ao id
    navigation.navigate('MealsOverview', { id });
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGrid
          {...itemData.item}
          onPressAction={() => pressHandler(itemData.item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
