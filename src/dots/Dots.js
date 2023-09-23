

import React,{useRef,useEffect} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Animated, { useSharedValue} from 'react-native-reanimated';

const DotsInCircle = ({second}) => {
  const numDots = 60; // Number of dots in the circle
  const circleRadius = 120; // Radius of the circle
  const dotSize = 5; // Size of each dot
  const angleIncrement = (2 * Math.PI) / numDots; // Angle between each dot

  const dots = Array.from({ length: numDots }, (_, index) => {
    const angle = index * angleIncrement;
    const x = circleRadius * Math.cos(angle);
    const y = circleRadius * Math.sin(angle);

    return {
      id: index.toString(),
      x,
      y,
    };
  });








  return (
    <View style={styles.circleContainer}>
      {dots.map((dot,index) => {
        return(
        <View
          key={dot.id}
          style={[
            {
              width: 4,
              height: 4,
              backgroundColor: dot.id >= second ? "white":"red",
              borderRadius: 5,
              position: 'absolute',
            },
            {
              left: dot.x - dotSize / 2,
              top: dot.y - dotSize / 2,
            },
          ]}>
          
        </View>)
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    marginTop:125,
    transform:'rotate(-90deg)'
  },
});

export default DotsInCircle;


