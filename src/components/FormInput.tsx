import React from "react";
import { View, TextInput, Text } from "react-native";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
};

export default function FormInput({
  placeholder,
  value,
  onChangeText,
  error
}: Props) {
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