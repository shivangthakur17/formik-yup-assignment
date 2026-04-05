import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import FormInput from "../components/FormInput";
import { employeeSchema } from "../validation/employeeSchema";

export default function EmployeeFormScreen() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          employeeId: "",
          email: "",
          phone: "",
          department: ""
        }}
        validationSchema={employeeSchema}
        validateOnBlur={true}
        validateOnChange={true}
<<<<<<< HEAD
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          setTimeout(() => {
            alert("Employee form submitted!");
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
          isSubmitting,
          resetForm
        }) => (
=======
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
          <>
            <FormInput
              label="Full Name"
              value={values.name}
              onChangeText={handleChange("name")}
              error={touched.name ? errors.name : ""}
            />

            <FormInput
              label="Employee ID"
              value={values.employeeId}
              onChangeText={handleChange("employeeId")}
              error={touched.employeeId ? errors.employeeId : ""}
            />

            <FormInput
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              error={touched.email ? errors.email : ""}
            />

            <FormInput
              label="Phone"
              value={values.phone}
              onChangeText={handleChange("phone")}
              error={touched.phone ? errors.phone : ""}
            />

            <FormInput
              label="Department"
              value={values.department}
              onChangeText={handleChange("department")}
              error={touched.department ? errors.department : ""}
            />

<<<<<<< HEAD
            <Button
              title={isSubmitting ? "Submitting..." : "Submit"}
              onPress={handleSubmit}
              disabled={isSubmitting}
            />

            <Button
              title="Reset"
              onPress={() => resetForm()}
            />
=======
            <Button title="Submit" onPress={() => handleSubmit()} />
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
