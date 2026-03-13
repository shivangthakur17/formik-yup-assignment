import React from "react";
import { View, Button } from "react-native";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import { signInSchema } from "../validation/signInSchema";

export default function SignInScreen({ navigation }: any) {

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={signInSchema}
      onSubmit={(values) => console.log(values)}
    >

      {({
        handleChange,
        handleSubmit,
        values,
        errors
      }) => (

        <View style={{ padding: 20 }}>

          <FormInput
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            error={errors.email}
          />

          <FormInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            error={errors.password}
          />

          <Button
            title="Sign In"
            onPress={() => handleSubmit()}
          />

          <Button
            title="Go to Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />

          <Button
            title="Employee Form"
            onPress={() => navigation.navigate("EmployeeForm")}
          />

        </View>

      )}

    </Formik>
  );
}