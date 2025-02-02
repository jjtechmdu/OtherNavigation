import { View, Text, Button, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";

function UserScreen({ navigation }) {
  function buttonPressHandler() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer !" onPress={buttonPressHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
