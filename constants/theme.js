export const COLORS = {
    accent: "#1dace8",
    accentBg: "#f8f9fa",
    primary: "#001F2D",
    secondary: "#4D626C",
    white: "#FFF",
    gray: "#74858C",
    mute: '#999b9b',
    muted: '#e1e7e7',
    BSPrimary: '#2721ec',
    BSSecondary: '#6c757d',
    BSSuccess: '#0d9e1d',
    BSDanger: '#e60d22',
    BSWarning: '#fff007',
};

export const SIZES = {
    base: 8,
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
    margin: SIZES.base / 2,
    padding: SIZES.base,
    ...SHADOWS.medium,

}
export const CARDS = {
    cardSimple: {...card_default},
    cardRounded: {
        ...card_default,
        borderRadius: SIZES.base,

    },
    cardRoundedHalf: {
        ...card_default,
        borderRadius: SIZES.base,
        width: '47.5%'

    },
};
export const TEXT_STYLE = {
    smallMuted: {},
    smallNormal: {fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary,},
    smallLight: {},
    smallBold: {},
    smallBoldMuted: {},
    normalMute: {},
    normalMuted: {},
    normalDark: {},
    normalLight: {},
    normalLightMute: {fontSize: SIZES.font, fontFamily: FONTS.light, color: COLORS.mute},
    normalBold: {},
    normalBoldMuted: {},
    mediumMuted: {},
    mediumDark: {},
    mediumLight: {},
    mediumBold: {},
    mediumBoldMuted: {},
    largeMuted: {},
    largeNormal: {fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.primary},
    largeLight: {},
    largeBold: {fontSize: SIZES.large, fontFamily: FONTS.bold},
    largeBoldMuted: {},
    exLargeNormal: {fontFamily: FONTS.semiBold, fontSize: SIZES.extraLarge, color: COLORS.primary,}

};