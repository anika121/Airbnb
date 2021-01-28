import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const Post = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri:
                        'https://a0.muscache.com/im/pictures/f6f82fac-5ea3-4060-ac8f-983767e4880c.jpg?im_w=960',
                }}
            />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            <Text style={styles.desciption} numberOfLines={2}>
                Apartment. Entire apartment. Wifi, Hair dryer, TV, Essentials,
                etc
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$1000 </Text>
                <Text style={styles.price}> $500</Text> / night
            </Text>

			<Text style={styles.totalPrice}>Total: $9000</Text>
        </View>
    );
};

export default Post;
