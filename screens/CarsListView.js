import React, {useState} from 'react'
import {Text, View, SafeAreaView, FlatList,} from 'react-native'
import {COLORS, NFTData} from '../constants'
import {FocusedStatusBar, HomeHeader, CarCard} from "../components";

const CarsListView = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if (value.length === 0) {
            setNftData(NFTData);
        }

        const filteredData = NFTData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length === 0) {
            setNftData(NFTData);
        } else {
            setNftData(filteredData);
        }
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "transparent"}}>
            <FocusedStatusBar backgroundColor={COLORS.accentBg} barStyle={'dark-content'}/>
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList
                        data={nftData}
                        renderItem={({item}) => <CarCard data={item}/>}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default CarsListView




