import { View, Text } from 'react-native';
import React from 'react';
import utils from '../Utils';

const Clock = ({ time }) => {
  return (
    <View style={{ marginTop: 60, alignItems: 'center', flex: 1 }}>
      <View
        style={{
          borderRadius: 135,
          width: 270,
          height: 270,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth:1,
          borderColor:"white",
          overflow: 'hidden',
          elevation: 10,  // Elevation for the circle's shadow
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 50 }}>{utils(time)}</Text>
        </View>
      </View>

      {/* Shadow Component */}
     
    </View>
  );
};

export default Clock;


// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import moment from 'moment'

// const Timer = ({ interval }) => {
//   const pad = (n) => n < 10 ? '0' + n : n
//   const duration = moment.duration(interval)
//   const centiseconds = Math.floor(duration.milliseconds() / 10)
//   return (
//     <View style={{flexDirection:"row"}}>
//       <Text style={{fontSize:40,color:"white"}}>{pad(duration.minutes())}:</Text>
//       <Text style={{fontSize:40,color:"white"}}>{pad(duration.seconds())}:</Text>
//       <Text style={{fontSize:40,color:"white"}}>{pad(centiseconds)}</Text>
//     </View>
//   )
// }

// export default Timer;

