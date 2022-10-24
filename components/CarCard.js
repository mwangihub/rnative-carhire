import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Image, TouchableOpacity} from "react-native";

import {COLORS, SIZES, SHADOWS, assets} from "../constants";
import {CarSubInfo, EthPrice, CarCardTittle, CarDetails, CarOwnerDetails} from "./CarSubInfo";
import {RectButton, CircleButton} from "./Button";

const CarCard = ({data}) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.medium,
            }}>
            {/* Image with circle button*/}
            <View style={{width: "100%", height: 250,}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CarDetails", { data })}>
                    <Image
                        source={data.image}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: SIZES.font,
                            borderTopRightRadius: SIZES.font,
                        }}/>
                </TouchableOpacity>

                <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            </View>
            {/* Title and price*/}
            <View style={{width: "100%", padding: SIZES.font,}}>
                <CarCardTittle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.font}
                />
            </View>
            {/* Meta details of car */}
            <View style={{width: "100%", padding: SIZES.font, paddingTop: 0}}>
                <CarDetails/>
            </View>
            {/* Meta details of the car owner */}
            <View style={{width: "100%", padding: SIZES.font, paddingTop: 0}}>
                <CarOwnerDetails/>
            </View>

        </View>
    );
};

export default CarCard;
