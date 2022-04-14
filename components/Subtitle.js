import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#3333',
    marginHorizontal: 6,
    marginVertical: 4,
  },
});

export default Subtitle;
