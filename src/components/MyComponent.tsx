import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	title: string;
};

const MyComponent = ({ title }: Props) => {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
};

export default MyComponent;

const styles = StyleSheet.create({});
