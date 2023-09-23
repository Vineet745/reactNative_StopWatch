import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

const TimeScroll = ({color,backgroundColor,height,borderRadius}) => {
const [selectedValue, setSelectedValue] = useState(null)

const hrArray = Array.from({length: 24}, (_, index) => index + 1);
  const minArray = Array.from({length: 60}, (_, index) => index + 1);
  const secArray = Array.from({length: 60}, (_, index) => index + 1);

  



  
  return (
    <View
        style={{
          height: 300,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderColor: 'black',
            height:height,
            width: 320,
            elevation: 25,
            shadowColor: 'white',
            shadowOpacity:2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor:backgroundColor,
            borderRadius:borderRadius
          }}>
          <FlatList

          style={{borderColor:"black"}}
            showsVerticalScrollIndicator={false}
            snapToAlignment='center'
            // snapToInterval={150} // Assuming each item has a width of 100 (adjust as needed)
            onScroll={(e)=>console.log(e)}
            data={hrArray}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10, alignSelf: 'center', marginTop: 10}}>
                  <Text style={{color:color, fontSize: 30}}>{item}</Text>
                </View>
              );
            }}
          />

          <FlatList
            showsVerticalScrollIndicator={false}
            onscr
            data={minArray}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10, alignSelf: 'center'}}>
                  <Text style={{color:color, fontSize: 30}}>{item}</Text>
                </View>
              );
            }}
          />

          <FlatList
          showsVerticalScrollIndicator={false}
            data={secArray}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10, alignSelf: 'center'}}>
                  <Text style={{color:color, fontSize: 30}}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
  )
}

export default TimeScroll;