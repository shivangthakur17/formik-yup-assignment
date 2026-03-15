import React from "react";
import { View, Button } from "react-native";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import { signUpSchema } from "../validation/signUpSchema";

export default function SignUpScreen({ navigation }: any) {

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={signUpSchema}
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
            placeholder="Full Name"
            value={values.name}
            onChangeText={handleChange("name")}
            error={errors.name}
          />

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

          <FormInput
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            error={errors.confirmPassword}
          />

          <Button
            title="Sign Up"
            onPress={() => handleSubmit()}
          />

          <Button
            title="Back to Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />

        </View>

      )}

    </Formik>
  );
}