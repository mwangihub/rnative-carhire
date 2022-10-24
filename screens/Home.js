import React, { useState } from 'react'
import {Text, View, SafeAreaView, FlatList,} from 'react-native'
import {COLORS, NFTData} from '../constants'
import {FocusedStatusBar, HomeHeader, CarCard} from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"transparent"}}>
      <FocusedStatusBar backgroundColor={COLORS.accentBg} barStyle={'dark-content'}/>
        <View style={{flex:1}}>
            <View style={{zIndex:0}}>
                <FlatList
                    data={NFTData}
                    renderItem={({item})=> <CarCard data={item}/>}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader/>}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}
export default Home




