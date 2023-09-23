import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';

const MyCarousel = ({hourSnap, minuteSnap, secondSnap}) => {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const carouselRef = useRef(null);

  const minutesArray = Array.from({length: 24}, (_, index) => padToTwo(index));
  const secondsArray = Array.from({length: 60}, (_, index) => padToTwo(index));
  const centiSecondsArray = Array.from({length: 60}, (_, index) =>
    padToTwo(index),
  );

  const renderTimerItem = ({item}) => {
    return (
      <View
        style={{
          width: 70,
          borderColor: 'black',
          shadowColor: 'black',
          height: 30,
          width: 90,
          borderRadius: 10,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            height: 30,
            alignSelf: 'center',
          }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Carousel
        ref={carouselRef}
        data={minutesArray}
        renderItem={renderTimerItem}
        sliderWidth={180}
        itemWidth={110}
        sliderHeight={50}
        itemHeight={40}
        vertical={true}
        onSnapToItem={hourSnap}
        autoplay={false}
        containerCustomStyle={{
          alignSelf: 'center',
          backgroundColor: '#414141',
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
        }}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
      <Carousel
        ref={carouselRef}
        data={secondsArray}
        renderItem={renderTimerItem}
        sliderWidth={180}
        itemWidth={100}
        sliderHeight={50}
        itemHeight={40}
        vertical={true}
        onSnapToItem={minuteSnap}
        autoplay={false}
        containerCustomStyle={{alignSelf: 'center', backgroundColor: '#414141'}}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />

      <Carousel
        ref={carouselRef}
        data={centiSecondsArray}
        renderItem={renderTimerItem}
        sliderWidth={180}
        itemWidth={100}
        sliderHeight={50}
        itemHeight={40}
        vertical={true}
        onSnapToItem={secondSnap}
        autoplay={false}
        containerCustomStyle={{
          alignSelf: 'center',
          backgroundColor: '#414141',
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
        }}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default MyCarousel;
