import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";

import {COLORS, FONTS, SIZES, assets, SHADOWS} from "../constants";
import {useNavigation} from "@react-navigation/native";

const HomeHeader = ({onSearch}) => {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: COLORS.accentBg, padding: SIZES.font, borderBottomStartRadius: SIZES.font, borderBottomEndRadius: SIZES.font, ...SHADOWS.light}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
                <Text style={{fontSize: 28, fontFamily: FONTS.bold}}>Smart hire</Text>
                <TouchableOpacity style={{width: 45, height: 45}} onPress={() => navigation.navigate('ProfileScreen', {"data": 'username'})}>
                    <Image source={assets.person01} resizeMode="contain" style={{width: "100%", height: "100%"}}/>
                    <Image source={assets.badge} resizeMode="contain" style={{position: "absolute", width: 15, height: 15, bottom: 0, right: 0,}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical: SIZES.font}}>
                <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary,}}>
                    Hello Victoria
                </Text>
                <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.accent, marginTop: SIZES.base / 2,}}>
                    Best car hire services
                </Text>
            </View>
            <View style={{marginTop: SIZES.font}}>
                <View style={{
                    width: "100%", borderRadius: SIZES.font, backgroundColor: COLORS.muted, flexDirection: "row", alignItems: "center", paddingHorizontal: SIZES.font, paddingVertical: SIZES.small - 2,
                }}>
                    <Image source={assets.search} resizeMode="contain" style={{width: 20, height: 20, marginRight: SIZES.base}}/>
                    <TextInput placeholder="Search NFTs" style={{flex: 1}} onChangeText={onSearch}/>
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;
