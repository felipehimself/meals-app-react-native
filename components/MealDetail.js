import { View, StyleSheet, Text } from 'react-native';

function MealDetail({ duration, complexity, affordability, propStyle }) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, propStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, propStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, propStyle]}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 13,
  },
});
export default MealDetail;
