import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TimerCountdown = () => {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);
  const {localTimer} = useSelector(state => state.timer);
  const [remainingTime, setRemainingTime] = useState(localTimer);
  const timer = useRef(null);
  const navigate = useNavigation();

  // Interval Start

  useEffect(() => {
    timer.current = setInterval(() => {
      setRemainingTime(prevTime => {
        const newTime = {...prevTime};
        if (newTime.second > 0) {
          newTime.second--;
        } else if (newTime.minute > 0) {
          newTime.minute--;
          newTime.second = 59;
        } else if (newTime.hour > 0) {
          newTime.hour--;
          newTime.minute = 59;
          newTime.second = 59;
        }

        if (
          newTime.hour === 0 &&
          newTime.minute === 0 &&
          newTime.second === 0
        ) {
          clearInterval(timer.current);
          navigate.goBack();
        }
        console.log('hello');
        return newTime;
      });
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  // StopTimer

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    navigate.goBack();
  };

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={{marginTop: 60, alignItems: 'center', flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            width: 270,
            height: 270,
            borderColor: 'white',
            borderRadius: 135,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Dots time={utils(time)}/> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 50}}>{`${padToTwo(
              remainingTime.hour,
            )}:${padToTwo(remainingTime.minute)}:${padToTwo(
              remainingTime.second,
            )}`}</Text>
          </View>
          <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>
            {localTimer.text}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={stopTimer}
          style={{
            marginRight: 20,
            backgroundColor: 'red',
            borderRadius: 50,
            padding: 15,
          }}>
          <Ionicons size={30} name="stop" style={{color: 'white'}} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={resetTimer}
          style={{
            marginRight: 20,
            backgroundColor: 'grey',
            borderRadius: 50,
            padding: 15,
          }}>
          <AntDesign size={30} name="close" style={{color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerCountdown;
