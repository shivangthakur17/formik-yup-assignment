import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import EmployeeFormScreen from "../screens/EmployeeFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Sign In" }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />

      <Stack.Screen
        name="EmployeeForm"
        component={EmployeeFormScreen}
        options={{ title: "Employee Form" }}
      />

    </Stack.Navigator>
  );
}