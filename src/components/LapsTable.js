import {View, Text, ScrollView} from 'react-native';
import React, {memo} from 'react';

const Lap = ({laps}) => {

  const formatTime = time => {
    const pad = n => (n < 10 ? '0' + n : n);
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  };
  
  return (
    <View
      style={{
        padding: 10,
        borderColor: 'black',
        marginTop: 80,
        width: '90%',
        borderColor: 'white',
        height: 300,
      }}>
      {laps.length ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Lap No</Text>
          <Text style={{color: 'white', fontSize: 18}}>Lap Time</Text>
          <Text style={{color: 'white', fontSize: 18}}>Total</Text>
        </View>
      ) : null}

      <ScrollView style={{marginTop: 10}}>
        {laps.map((lapTime, index, arr) => {
          return (
            <View
              key={index}
              style={{
                marginHorizontal: 20,
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>{index + 1}</Text>
              <Text style={{color: 'white', fontSize: 18}}>
                {index === 0
                  ? formatTime(lapTime)
                  : formatTime(lapTime - arr[index - 1])}
              </Text>
              <Text style={{color: 'white', fontSize: 18}}>
                {formatTime(lapTime)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default memo(Lap);
