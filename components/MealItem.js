import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { generateShadow } from '../globalStyles/styles';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';

function MealItem({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  id,
}) {
  const navigation = useNavigation();
  // ou
  // const {navigate} = useNavigate()

  function goToMealDetails() {
    navigation.navigate('MealDetailScreen', { id });
  }

  return (
    <View style={[styles.mealItem, generateShadow()]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={goToMealDetails}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    // elevation: 4,
    // shadowColor: '#000',
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 12,
  },

  

  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
