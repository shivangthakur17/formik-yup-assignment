import { Formik } from "formik";
import { Button, View } from "react-native";
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
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert("Signed in successfully!");
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
            label="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            error={touched.email ? errors.email : ""}
            placeholder="Email"
          />

          <FormInput
            label="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            error={touched.password ? errors.password : ""}
            placeholder="Password"
          />

          <Button
            title={isSubmitting ? "Loading..." : "Sign In"}
            onPress={handleSubmit}
            disabled={isSubmitting}
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
