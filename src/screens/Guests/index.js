import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Pressable, Text, View} from 'react-native';

import styles from './styles';

const GuestsScreen = () => {
	const [adults, setAdults] = useState(0)
	const [children, setChildren] = useState(0)
	const [infants, setInfants] = useState(0)

	const navigation = useNavigation()

    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
			<View>
				<View
					style={styles.row}>
					<View>
						<Text style={{fontWeight: '600', fontSize: 16}}>
							Adults
						</Text>
						<Text style={{color: '#8d8d8d'}}>Ages 13 and above</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Pressable
							onPress={() => setAdults(Math.max(0, adults - 1))}
							style={styles.button}>
							<Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
						</Pressable>
						<Text style={{ marginHorizontal: 14, fontSize: 17 }}>{adults}</Text>
						<Pressable
							onPress={() => setAdults(adults + 1)}
							style={styles.button}>
							<Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
						</Pressable>
					</View>
				</View>
				<View
					style={styles.row}>
					<View>
						<Text style={{fontWeight: '600', fontSize: 16}}>
							Children
						</Text>
						<Text style={{color: '#8d8d8d'}}>Ages 2 to 12</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Pressable
							onPress={() => setChildren(Math.max(0, children - 1))}
							style={styles.button}>
							<Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
						</Pressable>
						<Text style={{ marginHorizontal: 14, fontSize: 17 }}>{children}</Text>
						<Pressable
							onPress={() => setChildren(children + 1)}
							style={styles.button}>
							<Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
						</Pressable>
					</View>
				</View>
				<View
                style={styles.row}>
                <View>
                    <Text style={{fontWeight: '600', fontSize: 16}}>
                        Infants
                    </Text>
                    <Text style={{color: '#8d8d8d'}}>Ages under 2</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 14, fontSize: 17 }}>{infants}</Text>
                    <Pressable
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button}>
                        <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                    </Pressable>
                </View>
            </View>
			</View>
			<View>
				<Pressable style={{
					marginBottom: 20, 
					backgroundColor: '#f15454', 
					alignItems: 'center',
					justifyContent: 'center',
					height: 55,
					marginHorizontal: 20,
					borderRadius: 10
				}} onPress={() => navigation.navigate('Home', {
					screen: "Explore",
					params: {
						screen: 'SearchResults'
					}
				})}>
					<Text style={{ fontSize: 18, color: 'white' }}>See Available Stays...</Text>
				</Pressable>
			</View>
		</View>
    );
};

export default GuestsScreen;
