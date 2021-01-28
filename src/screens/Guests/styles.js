import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		width: 30,
		height: 30,
		borderRadius: 15,
		borderColor: '#676767',
		justifyContent: "center",
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: '#e3e3e3',
		paddingVertical: 20,
		marginHorizontal: 20
	}
})

export default styles