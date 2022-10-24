import React, {Component} from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {COLORS} from '../constants'

const ScreenHoc = (Screen, data_) => {
    return class extends Component {
        state = {}
        render() {
            return (
                <SafeAreaView style={{flex: 1, backgroundColor: "transparent"}}>
                    <StatusBar backgroundColor={COLORS.accentBg} barStyle={'dark-content'}/>
                    <Screen {...this.state} {...this.props}/>
                </SafeAreaView>

            )
        }
    }
}


export default ScreenHoc




