import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StopWatch from '../screens/stopWatch/StopWatch';
import Timer from '../screens/timer/Timer';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TimerCountdown from '../screens/timerCountdown/TimerCountdown';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#4C4B4B',
            borderTopWidth: 0,
            height: 60,
          },
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 12,
            paddingBottom: 8,
            paddingTop: -18,
          },
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Stopwatch') {
              iconName = !focused
                ? require('../assets/icons/stopwatch_new.png')
                : require('../assets/icons/blue_stopwatch.png');
            }
            if (route.name === 'TimerMain') {
              iconName = !focused
                ? require('../assets/icons/sand_timer.png')
                : require('../assets/icons/sand_timer_blue.png');
            }
            return <Image source={iconName} style={{width: 30, height: 30}} />;
          },
        })}>
        <Tab.Screen
          name="Stopwatch"
          component={StopWatch}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="TimerMain"
          component={TimerStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TimerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TimerCountdown"
        component={TimerCountdown}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
