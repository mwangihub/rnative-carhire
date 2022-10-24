import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false,}
        this.accordian = React.createRef();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        const {useData, useComponent, data, title, children, styles} = this.props;
        if (useComponent) {
            return (
                <View style={{paddingLeft: 15}}>
                    <TouchableOpacity style={style.row} onPress={() => this.toggleExpand()} ref={this.accordian}>
                        <Text style={styles ? {...styles} : style.title}>{title}</Text>
                        <Ionicons name={this.state.expanded ? 'md-chevron-up-outline' : 'md-chevron-down-outline'}
                                  size={20}
                                  color={"gray"}/>
                    </TouchableOpacity>
                    {
                        this.state.expanded &&
                        <View>
                            {children}
                        </View>
                    }
                </View>
            )
        } else if (useData) {
            return (
                <View >
                    <TouchableOpacity ref={this.accordian} style={style.row} onPress={() => this.toggleExpand()}>
                        <Text style={style.title}>{data.title}</Text>
                        <Ionicons
                            name={this.state.expanded ? 'md-chevron-up-outline' : 'md-chevron-down-outline'}
                            size={25}
                            color={"gray"}/>
                    </TouchableOpacity>
                    {
                        this.state.expanded &&
                        <Text style={{borderBottomWidth:1, borderBottomColor:'#d7d8d9', paddingBottom:8}}>
                            {data.body && <Text>{data.body}</Text>}
                       </Text>
                    }
                </View>

            )
        } else return null


    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded: !this.state.expanded})
    }

}

const style = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "gray",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent:'flex-start',
        paddingRight:9.5,
        flex: 1,
        height:36

    },
    parentHr: {
        height: 5,
        color: "#074bd3",
        width: '100%'
    },

});