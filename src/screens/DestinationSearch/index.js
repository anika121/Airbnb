import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TextInput, View, FlatList, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import searchResults from '../../../assets/data/search'
import styles from './styles'

const DestinationSearchScreen = () => {

	const navigation = useNavigation()

	const [inputText, setInputText] = useState("")

	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.textInput}
				placeholder="Where are you going? "
				value={inputText}
				onChangeText={setInputText}
			/>

			<FlatList
				data={searchResults}
				renderItem={({item}) => 
				(
					<Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
						<View style={styles.iconContainer}>
							<Entypo name={"location-pin"} size={30} />
						</View>
						<Text style={styles.locationText}>{item.description}</Text>
					</Pressable>
				)}
			/>
		</View>
	)
}

export default DestinationSearchScreen
