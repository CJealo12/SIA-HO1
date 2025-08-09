import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Name Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} />
      </View>

      {/* Address Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address:</Text>
        <TextInput style={styles.input} />
      </View>

      {/* Age Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age:</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Button title="Submit" />
        <Button title="Clear" color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "80%",
  },
  label: {
    width: 80,
    fontSize: 16,
    textAlign: "right",
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
});
