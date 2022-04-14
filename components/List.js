import { Text, View, StyleSheet } from 'react-native';

function List({ data }) {
  return (
    <>
      {data?.map((item) => {
        return (
          <View style={styles.listItem} key={item}>
            <Text style={styles.textStyle}>{item}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },

  textStyle: {
    textAlign: 'center',
  },
});

export default List;
