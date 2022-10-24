import React from 'react';
import {Image, View} from "react-native";
import assets from "../constants/assets";
import {CARDS} from "../constants";

const CarImageGallery = (props) => {
    const data =
        [
            {img: assets.nft04, id: 1},
            {img: assets.nft02, id: 2},
            {img: assets.nft03, id: 3},
            {img: assets.nft05, id: 4}
        ]

    return (
        <React.Fragment>
            {
                data.map((item, index) => {
                    return (
                        <View style={{...CARDS.cardRounded, height: 200, width:"98%"}} key={index}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{width: "100%", height: "100%"}}
                            />
                        </View>
                    )
                })
            }
        </React.Fragment>
    );
}

export default CarImageGallery;