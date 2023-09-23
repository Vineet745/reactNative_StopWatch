import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';

const ButtonController = ({
  lap,
  resetTimer,
  startWatchTimer,
  isRunning,
  stopTimer,
}) => {
  // Animation for Left Button

  const transformLeft = useSharedValue(120);

  const leftButtonAnimated = useAnimatedStyle(() => ({
    transform: [{translateX: transformLeft.value}],
  }));

  const startTimer = () => {
    transformLeft.value = withTiming(-10, {
      duration: 800,
      easing: Easing.inOut(Easing.quad),
    });
    transformRight.value = withTiming(10, {
      duration: 800,
      easing: Easing.inOut(Easing.quad),
    });
    startWatchTimer();
  };

  const reset = () => {
    transformLeft.value = withTiming(120, {
      duration: 800,
      easing: Easing.inOut(Easing.quad),
    });
    transformRight.value = withTiming(-120, {
      duration: 800,
      easing: Easing.inOut(Easing.quad),
    });
    resetTimer();
  };

  // RightButtonAnimation
  const transformRight = useSharedValue(-120);

  const rightButtonAnimation = useAnimatedStyle(() => ({
    transform: [{translateX: transformRight.value}],
  }));

  return (
    <View
      style={{
        height: 80,
        width: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Animated.View
        style={[
          leftButtonAnimated,
          {padding: 15, borderRadius: 50, backgroundColor: '#292929'},
        ]}>
        <TouchableOpacity
          disabled={isRunning}
          onPress={!isRunning ? reset : null}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/icons/reset_grey.png')}
          />
        </TouchableOpacity>
      </Animated.View>

      {!isRunning ? (
        <TouchableOpacity
          onPress={startTimer}
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            zIndex: 999,
          }}>
          <FontAwesome5 name="play" size={20} style={{color: 'white'}} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={stopTimer}
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            zIndex: 999,
          }}>
          <Ionicons name="pause" size={25} style={{color: 'white'}} />
        </TouchableOpacity>
      )}
      <Animated.View
        style={[
          rightButtonAnimation,
          {padding: 12, borderRadius: 50, backgroundColor: '#292929'},
        ]}>
        <TouchableOpacity onPress={lap} style={{}}>
          <AntDesign size={30} name="plus" style={{color: !isRunning?'grey':"white"}} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default React.memo(ButtonController);
