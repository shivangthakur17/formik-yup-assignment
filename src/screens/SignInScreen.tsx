<FormInput
  label="Email"
  value={values.email}
  onChangeText={handleChange("email")}
  error={touched.email && errors.email}
/>

<<<<<<< HEAD
<FormInput
  label="Password"
  value={values.password}
  onChangeText={handleChange("password")}
  secureTextEntry
  error={touched.password && errors.password}
/>
=======
export default function SignInScreen({ navigation }: any) {
<<<<<<< HEAD
=======

>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={signInSchema}
<<<<<<< HEAD
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
=======
      onSubmit={(values) => console.log(values)}
    >

>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
      {({
        handleChange,
        handleSubmit,
        values,
<<<<<<< HEAD
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
=======
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
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
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
<<<<<<< HEAD
      )}
    </Formik>
  );
}
=======

      )}

    </Formik>
  );
}
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
>>>>>>> fc4d79ec0ecee4e977d088a50a778f95dc8c12da
