import React, {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import TimeScroll from './TimeScroll';
import {useDispatch} from 'react-redux';
import {
  getAllDetail,
  getHour,
  getLocalTimer,
  getMinute,
  getSecond,
  getText,
  getTimer,
} from '../redux/slices/timerSlice';
import MyCarousel from './MyCorousel';
import BottomCorousel from './BottomCorousel';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BottomModal = ({toggleModal, modalVisible}) => {
  const [text, setText] = useState('');
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedSecond, setSelectedSecond] = useState(0);
  const [selectedTimer, setSelectedTimer] = useState([]);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onHourSnap = index => {
    console.log('hrindex', index);
    setSelectedHour(index);
  };

  const onMinuteSnap = index => {
    setSelectedMinute(index);
  };

  const onSecondSnap = index => {
    setSelectedSecond(index);
  };

  // On Sumbit
  const handleSubmit = () => {
    console.log('text', text);
    // if(selectedHour===0 || selectedMinute ===0 || selectedSecond === 0){

    // }
    const detailObj = {
      text,
      hour: selectedHour,
      minute: selectedMinute,
      second: selectedSecond,
    };

    dispatch(getAllDetail(detailObj));
    dispatch(getLocalTimer(detailObj));
    toggleModal();
    navigate('TimerCountdown');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <Modal
        isVisible={modalVisible}
        backgroundColor="transparent"
        onSwipeComplete={toggleModal}
        onBackdropPress={toggleModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View
          style={{
            backgroundColor: 'rgb(47,47,47)',
            padding: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 400,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={30} style={{color: 'white'}} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 20}}>Add Timer</Text>
            <TouchableOpacity onPress={handleSubmit}>
              <AntDesign name="check" size={30} style={{color: 'white'}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10,
              width: '100%',
              marginTop: 50,
            }}>
            <BottomCorousel
              color={'white'}
              backgroundColor={'black'}
              hourSnap={onHourSnap}
              minuteSnap={onMinuteSnap}
              secondSnap={onSecondSnap}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#393939',
              padding:10,
              height: 80,
              borderRadius: 10,
            }}>
            <View>
              <TextInput
                placeholder="Type Something"
                placeholderTextColor={'white'}
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'white',
                  color: 'white',
                }}
                value={text}
                onChangeText={value => setText(value)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomModal;
