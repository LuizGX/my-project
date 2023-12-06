import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import ShoppingList from './src/components/ShoppingList';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});