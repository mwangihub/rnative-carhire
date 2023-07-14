import React, {useEffect, useState} from "react";
import {View, Image, Text} from "react-native";

import {SIZES, FONTS, COLORS, SHADOWS, TEXT_STYLE, assets} from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";

/**
 * @summary Title and Price
 * */
export const CarCardTittle = ({title, subTitle, titleSize, subTitleSize}) => {
    const [showText, setShowText] = useState(true);
    useEffect(() => {
        // Change the state every second or the time given by User.
        const interval = setInterval(() => {
            setShowText((showText) => !showText);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row'
        }}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{...TEXT_STYLE.largeNormal}}>
                    {title}
                </Text>
                <View style={{display: showText ? "flex" : 'none', flexDirection: "column", justifyContent: "center", marginLeft: 1}}>
                    <Ionicons name={"ios-radio-button-on"} color={COLORS.BSSuccess}/>
                </View>
            </View>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary,
            }}>
                Ksh. 3,500/= per day
            </Text>
        </View>
    );
};

export const EthPrice = ({price}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{width: 20, height: 20, marginRight: 2}}
            />
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.primary,
            }}>
                {price}
            </Text>
        </View>
    );
};

/**
 * @summary provides Car basic information
 **/
export const CarDetails = () => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name={'ios-timer-outline'} size={SIZES.medium} style={{marginRight: 5}} color={COLORS.gray}/>
                <Text style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.gray,
                }}>
                    2022
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name={'md-people-outline'} size={SIZES.medium} style={{marginRight: 5}} color={COLORS.gray}/>
                <Text style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.gray,
                }}>
                    7 seater
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name={'md-car-sport-outline'} size={SIZES.medium} style={{marginRight: 5}}
                          color={COLORS.gray}/>
                <Text style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.gray,
                }}>
                    1.5 liter
                </Text>
            </View>

        </View>
    );
};
/**
 * @summary provides information of the car owner
 * */
export const CarOwnerDetails = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopColor: COLORS.muted,
            borderTopWidth: 1,
            paddingTop: SIZES.font
        }}>
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.small,
                color: COLORS.mute,
            }}>
                Smart hire Co
            </Text>
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.small,
                color: COLORS.mute,
            }}>
                Listed: 12th Jan 2022
            </Text>

        </View>
    );
};

const ImageCmp = ({imgUrl, index}) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    );
};

export const People = () => {
    return (
        <View style={{flexDirection: "row"}}>
            {[assets.person02, assets.person03, assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
                )
            )}
        </View>
    );
};

export const EndDate = () => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                ...SHADOWS.light,
                elevation: 1,
                maxWidth: "50%",
            }}
        >
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}
            >
                Ending in
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                }}
            >
                12h 30m
            </Text>
        </View>
    );
};

export const CarSubInfo = () => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <People/>
            <EndDate/>
        </View>
    );
};
