/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

import { Provider } from 'react-redux'
import store from './src/redux/store'

import Users from './src/components/users';
import Todos from './src/components/todos';
import Posts from './src/components/posts';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Test = () => (
  <View>
      <Text>
          test
      </Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
 
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator>

       {/* <Tab.Screen name="Home" component={Test} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }
            }
        /> */}

        <Tab.Screen name="Users" component={Users} options={{
              tabBarLabel: 'Users',
              tabBarIcon: ({ color, size }) => (
                <Icon name="users" color={color} size={size} />
              )}
            }
        />
       <Tab.Screen name="Todos" component={Todos} options={{
              tabBarLabel: 'Todos',
              tabBarIcon: ({ color, size }) => (
                <Icon name="list-ul" color={color} size={size} />
              )}
            }
        />
      <Tab.Screen name="Posts" component={Posts} options={{
              tabBarLabel: 'Posts',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="post" color={color} size={size} />
              )}
            }
        />

    </Tab.Navigator>
     </NavigationContainer>  
     </Provider>  
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
