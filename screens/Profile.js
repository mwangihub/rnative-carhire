import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {FocusedStatusBar} from "../components";
import React, {useRef, useState} from "react";
import {COLORS, TEXT_STYLE, SHADOWS, SIZES, FONTS, assets, CONTAINER} from "../constants";
import {useForm, Controller} from 'react-hook-form';
import {ProfileOverview, ProfileMenus} from "../components/ProfileComponents";

const ProfileOverViewComponent = props => {
    return (
        <React.Fragment>
            <View style={{justifyContent: 'center', alignItems: 'center', margin: SIZES.small}}>
                <Image source={assets.nft05} resizeMode={'contain'} style={{width: 100, height: 100, borderRadius: 100}}/>
            </View>

            <View>
                <ProfileOverview {...props}/>
            </View>
        </React.Fragment>
    )
};

const ProfileEdit = props => {
    return (
        <React.Fragment>
            <View style={CONTAINER.grid}>
                <View style={{justifyContent: "center", width: "30%", alignContent: "center", flexDirection: "row",}}>
                    <Image source={assets.nft06} resizeMode={'contain'} style={{width: 100, height: 100, borderRadius: 100}}/>
                </View>
                <View style={{flexDirection: "column", width: "68%", justifyContent: "center"}}>
                    <Text style={{...TEXT_STYLE.exLargeNormal}}>Peter Mwangi </Text>
                    <TouchableOpacity>
                        <Text style={{...TEXT_STYLE.largeBold, color: COLORS.accent}}>Update profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ProfileMenus/>
        </React.Fragment>
    )
};

/**
 * @summary  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Profile = props => {
    const [viewButton, SetViewButton] = useState(false);
    const scrollViewRef = useRef();
    const scrollTo = () => scrollViewRef.current.scrollToEnd({animated: true});

    return (
        <SafeAreaView>
            {/*translucent={true}*/}
            <FocusedStatusBar barStyle="dark-content" backgroundColor="rgba(255,255,255,0.2)"/>
            {/*contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between',}}*/}
            <View style={{marginHorizontal: SIZES.base,}}>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                    <TouchableOpacity style={{flexDirection: 'row', backgroundColor: COLORS.muted, marginVertical: SIZES.font, borderRadius: SIZES.extraLarge,}}
                                      onPress={() => SetViewButton(!viewButton)} activeOpacity={1}>
                        <View style={{...styles.viewButton, backgroundColor: viewButton ? COLORS.muted : COLORS.accent}}>
                            <Text style={{...styles.textStyle, color: viewButton ? COLORS.primary : COLORS.white}}>Profile</Text>
                        </View>
                        <View style={{...styles.viewButton, backgroundColor: viewButton ? COLORS.accent : COLORS.muted}}>
                            <Text style={{...styles.textStyle, color: viewButton ? COLORS.white : COLORS.primary}}>Overview</Text>
                        </View>
                    </TouchableOpacity>
                    {viewButton && <ProfileOverViewComponent scrollTo={scrollTo} {...props}/>}
                    {!viewButton && <ProfileEdit {...props}/>}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = {
    viewButton: {
        width: '50%',
        height: 45,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: SIZES.font, fontFamily: FONTS.bold
    },
};

export default Profile;