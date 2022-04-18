import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Favourites from './screens/Favourites';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: '#f8f9fa' },
        //drawerContentStyle: { backgroundColor: 'green' },
        drawerInactiveTintColor: 'gray',
        drawerActiveTintColor: '#000',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favourite'
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// definir estilos para todas as telas é no Stack.Navigator

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            contentStyle: { backgroundColor: '#f8f9fa' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={DrawerNavigation}
            options={{
              // title: 'All Categories',
              headerStyle: { backgroundColor: '#fff' },
              //contentStyle: { backgroundColor: '#ccc' },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // options={({route, navigation})=> {
            //   const id = route.params.id
            //   return {
            //     title: id
            //   }
            // }}
          />
          <Stack.Screen
            name='MealDetailScreen'
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='tap me' />
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
