<<<<<<< HEAD
import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  placeholder?: string;
  label?: string;
=======
import React from "react";
import { View, TextInput, Text } from "react-native";

type Props = {
  placeholder: string;
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
};

export default function FormInput({
  placeholder,
<<<<<<< HEAD
  label,
=======
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
  value,
  onChangeText,
  error
}: Props) {
<<<<<<< HEAD

  const isPassword = placeholder?.toLowerCase().includes("password");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ marginBottom: 15 }}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          focused && styles.inputFocused,
          error && styles.inputError
        ]}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={styles.input}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>
              {showPassword ? "🙈" : "👁️"}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  inputFocused: {
    borderColor: "#007bff",
  },
  inputError: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 18,
    marginLeft: 10,
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 13,
  },
});
=======
  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}
>>>>>>> bc98ea39675d8df5edf5512fcc76f5b90e68580e
