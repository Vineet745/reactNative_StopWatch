const {TimerCountdown} = require('../screens/timerCountdown/TimerCountdown');

export const TimerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timer"
        component={TimerCountdown}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
