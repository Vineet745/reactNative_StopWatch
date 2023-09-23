import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BottomModal from '../../components/BottomModal';
import {timerStyle} from './timerStyle';
import {useDispatch, useSelector} from 'react-redux';
import MyCorousel from '../../components/MyCorousel';
import {useNavigation} from '@react-navigation/native';
import {getLocalTimer} from '../../redux/slices/timerSlice';
import  AntDesign from "react-native-vector-icons/AntDesign"



const Timer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedSecond, setSelectedSecond] = useState(0);
  const detailArray = useSelector(state => state.timer.detailArray);
  const padToTwo = number => (number <= 9 ? `0${number}` : number);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const onHourSnap = index => {
    setSelectedHour(index);
  };

  const onMinuteSnap = index => {
    setSelectedMinute(index);
  };

  const onSecondSnap = index => {
    setSelectedSecond(index);
  };

  const handleStart = () => {
    const timeObj = {
      hour: selectedHour,
      minute: selectedMinute,
      second: selectedSecond,
    };
    dispatch(getLocalTimer(timeObj));
    navigate('TimerCountdown');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <MyCorousel
        color={'white'}
        backgroundColor={'black'}
        hourSnap={onHourSnap}
        minuteSnap={onMinuteSnap} 
        secondSnap={onSecondSnap}
      />
      <View style={timerStyle.bottomContainer}>
        <Text style={{color: 'white'}}>Frequently Used Timer</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={{color: 'red', fontSize: 20}}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{height: 200}}>
        {detailArray.map((detail, index) => {
          return (
            <View key={index} style={timerStyle.listdown}>
              <Text style={{color: 'white'}}>{detail.text?detail.text:"Default"}</Text>
              <Text
                style={{
                  color: 'white',
                }}>{`${padToTwo(detail.hour)}:${padToTwo(
                detail.minute,
              )}:${padToTwo(detail.second)}`}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleStart()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          borderRadius: 50,
          bottom: -10,
          alignSelf: 'center',
        }}>
          <AntDesign name="play" size={60} style={{color:"red"}}/>
      </TouchableOpacity>

      {/* </View> */}
      <BottomModal toggleModal={toggleModal} modalVisible={modalVisible} />
    </View>
  );
};

export default Timer;
