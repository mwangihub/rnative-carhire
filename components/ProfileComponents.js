import React, {useState} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {assets, CARDS, COLORS, CONTAINER, INPUT, SIZES, TEXT_STYLE} from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RectButton} from "./Button";
import {Accordion} from "./index";

/**
 * @remarks
 * [Create Login Forms:](https://www.youtube.com/watch?v=bgizPvmOoHA) [Style forms:](https://www.youtube.com/watch?v=dUyqfeeB0xw&list=PLk8gdrb2DmCggEpuBwT4xQyJIYiRNN17L&index=6)
 * @returns methods - . {@link UseFormReturn}
 */
export const ProfileUpdateForm = () => {
    const [inputName, setInputName] = useState(COLORS.accentLight);
    const [inputEmail, setInputEmail] = useState(COLORS.accentLight);
    const [inputPass, setInputPass] = useState(COLORS.accentLight);
    const [viewPass, setViewPass] = useState(false);

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'name': '',
            'email': '',
            'password': ''
        }
    })
    const handleLogin = data => {
        // console.log(data)
        reset()
    }
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export const LoginForm = () => {
    const [inputName, setInputName] = useState(COLORS.accentLight);
    const [inputEmail, setInputEmail] = useState(COLORS.accentLight);
    const [inputPass, setInputPass] = useState(COLORS.accentLight);
    const [viewPass, setViewPass] = useState(false);

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'name': '',
            'email': '',
            'password': ''
        }
    })
    const handleLogin = data => {
        // console.log(data)
        reset()
    }
    return (
        <React.Fragment>

            <View style={INPUT.formControl}>
                <Text style={TEXT_STYLE.smallLight}>Enter your name</Text>
                <View style={INPUT.formIcon}>
                    <Ionicons name={"person"} size={25} color={COLORS.accent}/>
                </View>
                <Controller
                    name="name"
                    control={control}
                    render={({field, fieldState, formState,}) => (
                        <TextInput
                            placeholder='Your name'
                            value={field.value}
                            autoFocus={false}
                            onFocus={() => setInputName(COLORS.accentDim)}
                            onBlur={() => setInputName(COLORS.accentLight)}
                            style={{...INPUT.formInput, backgroundColor: inputName}}
                            onChangeText={value => field.onChange(value)}
                            defaultValue={'Peter Mwangi'}/>
                    )}/>
            </View>

            <View style={INPUT.formControl}>
                <Text style={TEXT_STYLE.smallLight}>Enter email</Text>
                <View style={INPUT.formIcon}>
                    <Ionicons name={"mail-outline"} size={25} color={COLORS.accent}/>
                </View>
                <Controller
                    name="email"
                    control={control}
                    render={({field, fieldState, formState,}) => (
                        <TextInput
                            placeholder='email@example.com'
                            value={field.value}
                            onFocus={() => setInputEmail(COLORS.accentDim)}
                            onBlur={() => setInputEmail(COLORS.accentLight)}
                            style={{...INPUT.formInput, backgroundColor: inputEmail}}
                            onChangeText={value => field.onChange(value)}
                            keyboardType="email-address"
                            defaultValue={'peterMwangi@gmail.com'}/>
                    )}/>
            </View>
            <View style={INPUT.formControl}>
                <Text style={TEXT_STYLE.smallLight}>Enter password</Text>
                <View style={INPUT.formIcon}>
                    <Ionicons name={"md-lock-closed"} size={25} color={COLORS.accent}/>
                </View>
                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState, formState,}) => (
                        <TextInput
                            placeholder='Password'
                            value={field.value}
                            onFocus={() => setInputPass(COLORS.accentDim)}
                            onBlur={() => setInputPass(COLORS.accentLight)}
                            style={{...INPUT.formInput, backgroundColor: inputPass}}
                            onChangeText={value => field.onChange(value)}
                            secureTextEntry={viewPass}
                        />
                    )}/>
                <TouchableOpacity style={INPUT.formRightIcon} onPress={() => setViewPass(!viewPass)}>
                    <Ionicons name={viewPass ? "eye-off" : 'eye'} size={25} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <View style={{...INPUT.formControl, justifyContent: 'center', flexDirection: 'row'}}>
                <RectButton
                    fontSize={SIZES.large}
                    handlePress={handleSubmit(data => handleLogin(data))}
                    text={"Login"}
                    width={'50%'}
                />
            </View>

        </React.Fragment>
    );
};

export const ProfileOverview = props => {

    return (
        <React.Fragment>

            <View style={CONTAINER.grid}>
                <View style={{padding: SIZES.base, width: '33.3%'}}>
                    <View style={{...CARDS.cardMutedCentered}}>
                        <Text style={{...TEXT_STYLE.exLargeNormal,}}>10</Text>
                        <Text style={{...TEXT_STYLE.semiBaseMuted, textTransform: 'uppercase', letterSpacing: SIZES.base * 0.1}}>Rides</Text>
                    </View>
                </View>
                <View style={{padding: SIZES.base, width: '33.3%'}}>
                    <View style={{...CARDS.cardMutedCentered}}>
                        <Text style={{...TEXT_STYLE.exLargeNormal,}}>6</Text>
                        <Text style={{...TEXT_STYLE.semiBaseMuted, textTransform: 'uppercase', letterSpacing: SIZES.base * 0.1}}>Comments</Text>
                    </View>
                </View>
                <View style={{padding: SIZES.base, width: '33.3%',}}>
                    <View style={{...CARDS.cardMutedCentered,}}>
                        <Text style={{...TEXT_STYLE.exLargeNormal,}}>6</Text>
                        <Text style={{...TEXT_STYLE.semiBaseMuted, textTransform: 'uppercase', letterSpacing: SIZES.base * 0.1}}>Trustees</Text>
                    </View>
                </View>


            </View>

            <View style={styles.listContainer}>
                <Text style={styles.metaInfo}>Name</Text>
                <Text style={styles.metaDetails}>Peter Mwangi M.</Text>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.metaInfo}>Job title</Text>
                <Text style={styles.metaDetails}>Mechanical engineer</Text>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.metaInfo}>Location</Text>
                <Text style={styles.metaDetails}>Nakuru, RiftValley, Kenya</Text>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.metaInfo}>Phone</Text>
                <Text style={styles.metaDetails}>+257747773246</Text>
            </View>

            <View style={{...styles.listContainer, paddingBottom: SIZES.large}}>
                <Text style={styles.metaInfo}>Bio</Text>
                <Text style={styles.metaDetails}>
                    This is a short story about my journey to create awesome software
                    using Python, Java and C++. Also, I am willing to join any Professional
                    team around the world.
                </Text>
            </View>

            <Accordion
                useComponent={true}
                title={'Recently hired cars'}
                styles={{...TEXT_STYLE.largeLight, paddingVertical: SIZES.small, color: COLORS.accent}}
                {...props}>

                <View style={{marginTop: SIZES.large}}>
                    {/*<Text style={{...TEXT_STYLE.exLargeNormal, marginBottom:SIZES.extraLarge}}> Recently hired cars </Text>*/}
                    <View style={{...styles.listContainer, borderBottomColor: COLORS.white, marginBottom: SIZES.extraLarge}}>
                        <View style={styles.hireMeta}>
                            <Text style={{color: COLORS.mute}}>12th Jan, 2022</Text>
                            <Text style={{fontSize: SIZES.large, marginVertical: SIZES.base * 0.4}}>Subaru Exiga KDA 448 J</Text>
                            <Text style={{color: COLORS.mute}}>Smart Hire Co. <Text style={{color: COLORS.secondary}}>200 likes</Text></Text>
                        </View>
                        <View style={styles.hireMetaDetails}>
                            <Image source={assets.nft06} style={{width: '100%', height: 120}}/>
                        </View>
                    </View>

                    <View style={{...styles.listContainer, borderBottomColor: COLORS.white, marginBottom: SIZES.extraLarge}}>
                        <View style={styles.hireMeta}>
                            <Text style={{color: COLORS.mute}}>12th Jan, 2022</Text>
                            <Text style={{fontSize: SIZES.large, marginVertical: SIZES.base * 0.4}}>Subaru Exiga KDA 448 J</Text>
                            <Text style={{color: COLORS.mute}}>Smart Hire Co. <Text style={{color: COLORS.secondary}}>200 likes</Text></Text>
                        </View>
                        <View style={styles.hireMetaDetails}>
                            <Image source={assets.nft05} style={{width: '100%', height: 120}}/>
                        </View>
                    </View>
                </View>
            </Accordion>

        </React.Fragment>
    )

};

export const ProfileMenus = props => {
    return (
        <React.Fragment>

            <View style={{flexDirection: "row", marginTop: SIZES.extraLarge}}>
                <View style={{marginRight: SIZES.base}}>
                    <Ionicons name={'ios-logo-buffer'} size={35} style={{color: COLORS.green}}/>
                </View>
                <TouchableOpacity style={{...styles.listContainer, flex: 1}}>
                    <Text style={{...TEXT_STYLE.largeNormal}}>Previous Hires</Text>
                    <Ionicons name={'md-chevron-forward-outline'} size={25} style={{color: COLORS.mute}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", marginTop: SIZES.extraLarge}}>
                <View style={{marginRight: SIZES.base}}>
                    <Ionicons name={'star-half-outline'} size={30} style={{color: COLORS.dullRed}}/>
                </View>
                <TouchableOpacity style={{...styles.listContainer, flex: 1}}>
                    <Text style={{...TEXT_STYLE.largeNormal}}>Previous Ratings</Text>
                    <Ionicons name={'md-chevron-forward-outline'} size={25} style={{color: COLORS.mute}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", marginTop: SIZES.extraLarge}}>
                <View style={{marginRight: SIZES.base}}>
                    <Ionicons name={'locate-sharp'} size={35} style={{color: COLORS.dullYellow}}/>
                </View>
                <TouchableOpacity style={{...styles.listContainer, flex: 1}}>
                    <Text style={{...TEXT_STYLE.largeNormal}}>View By Location</Text>
                    <Ionicons name={'md-chevron-forward-outline'} size={25} style={{color: COLORS.mute}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", marginTop: SIZES.extraLarge}}>
                <View style={{marginRight: SIZES.base}}>
                    <Ionicons name={'md-sync-circle-sharp'} size={35} style={{color: COLORS.BSSecondary}}/>
                </View>
                <TouchableOpacity style={{...styles.listContainer, flex: 1}}>
                    <Text style={{...TEXT_STYLE.largeNormal}}>Profile update</Text>
                    <Ionicons name={'md-chevron-forward-outline'} size={25} style={{color: COLORS.mute}}/>
                </TouchableOpacity>
            </View>


        </React.Fragment>
    )
}

const meta = {
    justifyContent: 'flex-start'
};

const styles = {
    listContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingVertical: SIZES.base,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.muted,

    },
    metaInfo: {
        ...meta,
        ...TEXT_STYLE.largeNormal,
        width: '30%'
    },
    metaDetails: {
        ...meta,
        ...TEXT_STYLE.largeLight,
        width: '70%',
    },
    hireMeta: {
        width: '50%'
    },
    hireMetaDetails: {
        width: '48%'
    },
};

