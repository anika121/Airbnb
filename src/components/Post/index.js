import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const Post = (props) => {

	const post = props.post

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri:
                        post.image,
                }}
            />
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            <Text style={styles.desciption} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.price}</Text> / night
            </Text>

            <Text style={styles.totalPrice}>Total: {post.totalPrice}</Text>
        </View>
    );
};

export default Post;
