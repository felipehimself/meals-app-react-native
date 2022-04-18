import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealsList({items}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={(itemData) => <MealItem {...itemData?.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});


export default MealsList;
