import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ itemData, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "##35a135" }}
        onPress={deleteGoalHandler.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#00ff00",
  },
  goalText: {
    color: "#120438",
    padding: 8,
  },
});
