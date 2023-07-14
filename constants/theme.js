export const COLORS = {
    accent: "#1dace8",
    accentDim: "#cdfaff",
    accentLight: "#f1faff",
    accentBg: "#f8f9fa",
    primary: "#001F2D",
    secondary: "#4D626C",
    white: "#FFF",
    gray: "#74858C",
    mute: '#999b9b',
    muted: '#e1e7e7',
    light:'#f5f7f7',
    green: "#4b8504",
    dullRed: "#bb0047",
    dullYellow: "#d39c0c",
    BSPrimary: '#0d6afb',
    BSSecondary: '#6c757d',
    BSSuccess: '#0d9e1d',
    BSDanger: '#e60d22',
    BSWarning: '#fff007',
};

export const SIZES = {
    base: 8,
    semiBase: 10,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
};

export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};

const card_default = {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.extraLarge,
    padding: SIZES.base,
    width: "100%",
...SHADOWS.medium,
}

export const CARDS = {
    container: {width: '50%', padding: SIZES.base},
    cardSimple: {...card_default},
    cardRounded: {
        ...card_default,
        borderRadius: SIZES.base,
    },
    cardRoundedCentered: {
        ...card_default,
        borderRadius: SIZES.base,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center"
    },
    cardMutedCentered: {
        backgroundColor: COLORS.light,
        marginBottom: SIZES.extraLarge,
        padding: SIZES.base,
        width: "100%",
        borderRadius: SIZES.base,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center"
    },
};

export const TEXT_STYLE = {
    smallMuted: {fontSize: SIZES.base, fontFamily: FONTS.semiBold, color: COLORS.mute},
    smallNormal: {fontSize: SIZES.base, fontFamily: FONTS.semiBold, color: COLORS.primary,},
    smallLight: {},
    smallBold: {},
    smallBoldMuted: {},

    semiBaseMuted: {fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.mute},
    semiBaseNormal: {fontSize: SIZES.small, fontFamily: FONTS.semiBold, color: COLORS.primary,},
    semiBaseLight: {},
    semiBaseBold: {fontSize: SIZES.small, fontFamily: FONTS.bold,},
    semiBaseBoldMuted: {},


    normalBold: {fontSize: SIZES.font, fontFamily: FONTS.bold,},
    normalMuted: {},
    normalDark: {},
    normalLight: {},
    normalLightMute: {fontSize: SIZES.font, fontFamily: FONTS.light, color: COLORS.mute},
    normalBoldMute: {fontSize: SIZES.font, fontFamily: FONTS.bold, color: COLORS.mute},
    normalBoldMuted: {},

    mediumMuted: {fontSize: SIZES.medium, fontFamily: FONTS.semiBold, color: COLORS.mute},
    mediumDark: {},
    mediumLight: {},
    mediumBold: {},
    mediumBoldMuted: {},

    largeMuted: {fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.muted},
    largeMute: {fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.mute},
    largeNormal: {fontFamily: FONTS.regular, fontSize: SIZES.large, color: COLORS.primary},
    largeLight: {fontFamily: FONTS.regular, fontSize: SIZES.large, color: COLORS.mute},
    largeBold: {fontSize: SIZES.large, fontFamily: FONTS.bold},
    largeSemiBold: {fontSize: SIZES.large, fontFamily: FONTS.semiBold},
    largeBoldMuted: {},

    exLargeNormal: {fontFamily: FONTS.semiBold, fontSize: SIZES.extraLarge, }
};

const form_icon = {
    position: 'absolute',
    top: SIZES.extraLarge,
    zIndex: 1,
};

export const INPUT = {
    formInput: {
        flex: 1,
        padding: SIZES.base,
        paddingTop: SIZES.small,
        paddingHorizontal: SIZES.extraLarge * 2.5,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.accentDim,
        fontSize: SIZES.medium,

    },
    formControl: {
        width: '100%',
        marginBottom: SIZES.font
    },
    formIcon: {
        ...form_icon,
        left: SIZES.small,
        borderRightWidth: 1,
        borderRightColor: COLORS.accent,
        paddingRight: 10
    },
    formRightIcon: {
        ...form_icon,
        right: SIZES.small,
    },


};

export const CONTAINER={
    grid: {
        flexDirection: "row", justifyContent: 'space-between', flexWrap: 'wrap',
    },

};

