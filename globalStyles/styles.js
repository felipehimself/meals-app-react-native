import { Platform } from "react-native";
function generateShadow() {
  return {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android'? 'hidden' : visible
  };
}

export {generateShadow}
