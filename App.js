import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelComeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

export default function App() {
  //const Drawer = createDrawerNavigator();
  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#066bef" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#b7d2f5",
          drawerActiveTintColor: "#066bef",
          // drawerStyle: { backgroundColor: "#cccccc" },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelComeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator> */}
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelComeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
