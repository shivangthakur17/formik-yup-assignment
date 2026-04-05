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