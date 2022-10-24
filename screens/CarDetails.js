import React from "react";
import {View, Text, SafeAreaView, Image, StatusBar, FlatList, ScrollView} from "react-native";
import {COLORS, SIZES, assets, SHADOWS, FONTS, CARDS, TEXT_STYLE} from "../constants";
import {
    CircleButton,
    RectButton,
    CarSubInfo,
    CarDetailsDesc,
    DetailsBid,
    FocusedStatusBar,
    Accordion,
    CarImageGallery
} from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";


const DetailsHeader = ({data, navigation}) => (
    <View style={{width: "100%", height: 373}}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{width: "100%", height: "100%"}}
        />

        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />

    </View>
);

const CarDetails = ({route, navigation}) => {
    const {data} = route.params;

    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="rgba(255,255,255,0.2)"
                translucent={true}
            />

            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                zIndex: 1,
            }}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <View style={{flex: 1, justifyContent: "center",}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection:"column"}}>
                        <DetailsHeader data={data} navigation={navigation}/>
                        <CarSubInfo/>
                        <View style={{padding: SIZES.font,}}>
                            <CarDetailsDesc data={data}/>
                        </View>

                        <View>
                            {
                                DataT.map((data, index) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'column',
                                            marginBottom: SIZES.font,
                                            width: '100%',
                                            paddingHorizontal: 15
                                        }} key={index}>
                                            <Accordion
                                                useData={true}
                                                data={data}
                                                title={'Car extra accessories'}
                                                styles={TEXT_STYLE.smallNormal}
                                            >
                                                <Text>Build and Deploy Your First Modern React Native App | NFT
                                                    Marketplace
                                                    Course -
                                                    Extremely
                                                    Easy</Text>
                                            </Accordion>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <View style={{flexDirection: "row", flexWrap: 'wrap',}}>
                            <View style={CARDS.cardRoundedHalf}>
                                <Ionicons name={'md-car-sport-outline'} size={35} color={COLORS.mute}/>
                                <Text style={{...TEXT_STYLE.largeNormal, marginTop: SIZES.font}}>Condition</Text>
                                <Text style={TEXT_STYLE.normalLightMute}>Car in good conditions</Text>
                            </View>
                            <View style={CARDS.cardRoundedHalf}>
                                <Ionicons name={'ios-flash-outline'} size={35} color={COLORS.gray}/>
                                <Text style={{...TEXT_STYLE.largeNormal, marginTop: SIZES.font}}>Fuel</Text>
                                <Text style={TEXT_STYLE.normalLightMute}>Petrol: Best consumption in moderate
                                    speed</Text>
                            </View>

                            <View style={CARDS.cardRoundedHalf}>
                                <Ionicons name={'md-cog-outline'} size={35} color={COLORS.gray}/>
                                <Text style={{...TEXT_STYLE.largeNormal, marginTop: SIZES.font}}>Service</Text>
                                <Text style={TEXT_STYLE.normalLightMute}>Well serviced and ready</Text>
                            </View>
                            <View style={CARDS.cardRoundedHalf}>
                                <Ionicons name={'ios-logo-electron'} size={35} color={COLORS.gray}/>
                                <Text style={{...TEXT_STYLE.largeNormal, marginTop: SIZES.font}}>Power</Text>
                                <Text style={TEXT_STYLE.normalLightMute}>Highly powered and stable on speed.</Text>
                            </View>
                        </View>

                        <View style={{marginBottom: SIZES.extraLarge * 3,}}>
                            <Text style={{...TEXT_STYLE.largeNormal, paddingHorizontal: SIZES.small,}}>Gallery</Text>
                            <View style={{flexDirection: "row", flexWrap: 'wrap'}}>
                                <CarImageGallery/>
                            </View>
                        </View>

                    </View>

                </ScrollView>
            </View>


        </SafeAreaView>
    );
};
const LoppingFlatList = (data, navigation) => {
    return (
        <FlatList
            data={data.bids}
            renderItem={({item}) => <DetailsBid bid={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: SIZES.extraLarge * 3,
            }}
            ListHeaderComponent={() => (
                <React.Fragment>
                    <DetailsHeader data={data} navigation={navigation}/>
                    <CarSubInfo/>
                    <View style={{padding: SIZES.font}}>
                        <CarDetailsDesc data={data}/>
                        {data.bids.length > 0 && (
                            <Text style={{
                                fontSize: SIZES.font,
                                fontFamily: FONTS.semiBold,
                                color: COLORS.primary,
                            }}>
                                Current Bid
                            </Text>
                        )}
                    </View>
                </React.Fragment>
            )}
        />
    )
};
const DataT = [
    {
        id: "1",
        title: "Music ",
        body: "Bass boosted with screen"
    }, {
        id: "2",
        title: "Sound Mode connection",
        body: "Bluetooth, Auxiliary, and stereo"
    }, {
        id: "3",
        title: "Seats and boot",
        body: "Massage function enabled, safety belt and child lock"
    },
]
export default CarDetails;