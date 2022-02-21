import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem'
import { GoalInput } from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])
	const [isAddMode, setIsAddMode] = useState(false)

	const addGoalHandler = (goalTitle) => {
		setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle }])
		setIsAddMode(false)
	}

	const deleteGoalHandler = (goalId) => {
		setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId))
	}

	return (
		<View style={styles.screen}>
			<StatusBar style="auto" />
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				isVisible={isAddMode}
				onAddGoal={addGoalHandler}
				onCancelAddGoal={() => setIsAddMode(false)}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
				)} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10
	}
})