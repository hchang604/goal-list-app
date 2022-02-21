import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

export const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText)
	}

	return (
		<Modal visible={props.isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.addButtonContainer}>
						<Button title="ADD" onPress={() => {
							props.onAddGoal(enteredGoal)
							setEnteredGoal('')
						}} />
					</View>


					<Button title="CANCEL" color="red" onPress={() => {
						props.onCancelAddGoal();
						setEnteredGoal('')
					}}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10
	},
	buttonContainer: {
		width: "70%",
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	addButtonContainer: {
		width: '70%'
	}
})