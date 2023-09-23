import React, {useState, useRef , useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ButtonController from '../../components/ButtonController';
import Lap from '../../components/LapsTable';
import DotsInCircle from '../../dots/Dots';
import Dots from '../../dots/Dots';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [second, setSecond] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  // To get the value of Seconds
  useEffect(() => {
    const formattedTime = formatTime(elapsedTime);
    const dividedTime = formattedTime.split(':');
    const seconds = parseInt(dividedTime[1], 10);
    setSecond(seconds);
  }, [elapsedTime]);

  // For starting the stopwatch

  const startWatchTimer = () => {
    // clearInterval(timerRef.current);
    const startTime = Date.now() - elapsedTime;
    timerRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 100);
    setIsRunning(true);
  };
  

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Laps

  const handleLap = () => {
    if (isRunning) {
      setLaps(prev => [...prev, elapsedTime]);
    }
  };

  // Reset Function

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  // Get Stopwatch time

  const formatTime = time => {
    const pad = n => (n < 10 ? '0' + n : n);
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  };
  return (
    <View style={styles.container}>
      <View>
        <Dots second={second}/>
      <View
        style={{
          borderColor: 'white',
          width: 270,
          height: 270,
          borderWidth:1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 135,
          position:'absolute',
          left:-135,
          top:-9,
          shadowColor:"grey",
          elevation:6
        }}>
        <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      </View>
      </View>
      <Lap laps={laps} />
      <ButtonController
        startWatchTimer={startWatchTimer}
        lap={handleLap}
        resetTimer={handleReset}
        stopTimer={stopTimer}
        isRunning={isRunning}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  timer: {
    fontSize: 48,
    color: 'white',
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    margin: 5,
  },
  laps: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
  },
  lapText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Stopwatch;
