import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';

const MyCarousel = ({
  color,
  backgroundColor,
  hourSnap,
  minuteSnap,
  secondSnap,
}) => {
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
          borderColor: 'white',
          elevation: 20,
          shadowColor: 'white',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          height: 80,
          width: 90,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30, color: color}}>{item}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        height: 300,
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
        itemWidth={130}
        enableMomentum={true}
        inactiveSlideOpacity={0.4}
        sliderHeight={260}
        itemHeight={100}
        vertical={true}
        onSnapToItem={hourSnap}
        autoplay={false}
        containerCustomStyle={{alignSelf: 'center'}}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
      <View
        style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 30}}>:</Text>
      </View>
      <Carousel
        ref={carouselRef}
        data={secondsArray}
        renderItem={renderTimerItem}
        sliderWidth={180}
        itemWidth={100}
        sliderHeight={260}
        enableMomentum={true}
        itemHeight={100}
        vertical={true}
        inactiveSlideOpacity={0.4}
        onSnapToItem={minuteSnap}
        autoplay={false}
        containerCustomStyle={{alignSelf: 'center'}}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
      <Text style={{color: 'white', fontSize: 30}}>:</Text>

      <Carousel
        ref={carouselRef}
        data={centiSecondsArray}
        renderItem={renderTimerItem}
        sliderWidth={180}
        itemWidth={100}
        sliderHeight={260}
        enableMomentum={true}
        inactiveSlideOpacity={0.4}
        itemHeight={100}
        vertical={true}
        onSnapToItem={secondSnap}
        autoplay={false}
        containerCustomStyle={{alignSelf: 'center'}}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default MyCarousel;
