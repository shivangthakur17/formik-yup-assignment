import { Formik } from "formik";
import { Button, View } from "react-native";
import FormInput from "../components/FormInput";
import { signUpSchema } from "../validation/signUpSchema";

export default function SignUpScreen({ navigation }: any) {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={signUpSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert("Signed up successfully!");
          setSubmitting(false);
        }, 1500);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting
      }) => (
        <View style={{ padding: 20 }}>

          <FormInput
            label="Full Name"
            value={values.fullName}
            onChangeText={handleChange("fullName")}
            error={touched.fullName ? errors.fullName : ""}
          />

          <FormInput
            label="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            error={touched.email ? errors.email : ""}
          />

          <FormInput
            label="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
            error={touched.password ? errors.password : ""}
          />

          <FormInput
            label="Confirm Password"
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            secureTextEntry
            error={touched.confirmPassword ? errors.confirmPassword : ""}
          />

          <Button
            title={isSubmitting ? "Loading..." : "Sign Up"}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />

          <Button
            title="Go to Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />

        </View>
      )}
    </Formik>
  );
}
