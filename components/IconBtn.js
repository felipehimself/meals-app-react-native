import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconBtn({ onPressAction, icon, color }) {
  return (
    <Pressable
      onPress={onPressAction}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: '#ccc' }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default IconBtn;
