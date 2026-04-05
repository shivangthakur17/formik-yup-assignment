<FormInput
  label="Email"
  value={values.email}
  onChangeText={handleChange("email")}
  error={touched.email && errors.email}
/>

<FormInput
  label="Password"
  value={values.password}
  onChangeText={handleChange("password")}
  secureTextEntry
  error={touched.password && errors.password}
/>