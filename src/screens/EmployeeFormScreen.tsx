import React from "react";
import { View, Button } from "react-native";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import { employeeSchema } from "../validation/employeeSchema";

export default function EmployeeFormScreen() {

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        department: "",
        employeeId: ""
      }}
      validationSchema={employeeSchema}
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
            placeholder="Employee Name"
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
            placeholder="Phone"
            value={values.phone}
            onChangeText={handleChange("phone")}
            error={errors.phone}
          />

          <FormInput
            placeholder="Department"
            value={values.department}
            onChangeText={handleChange("department")}
            error={errors.department}
          />

          <FormInput
            placeholder="Employee ID"
            value={values.employeeId}
            onChangeText={handleChange("employeeId")}
            error={errors.employeeId}
          />

          <Button
            title="Submit Employee Form"
            onPress={() => handleSubmit()}
          />

        </View>

      )}

    </Formik>
  );
}