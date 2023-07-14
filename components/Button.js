import React from "react";
import {TouchableOpacity, Text, Image} from "react-native";

import {COLORS, SIZES, FONTS, SHADOWS} from "../constants";

export const CircleButtonOutlined = ({text, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                width: '50%',
                height: 45,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{width: 24, height: 24}}
            />
        </TouchableOpacity>
    );
};

export const RectButton = ({width, fontSize, text, handlePress, ...props}) => {
    return (
        <TouchableOpacity style={{
                backgroundColor: COLORS.accent,
                padding: SIZES.small,
                borderRadius: SIZES.extraLarge,
                width: width,}}
            onPress={handlePress}>
            <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
