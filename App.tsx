import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import MyComponent from "./src/components/MyComponent";

export default function App() {
	// hook useState
	/**
	 * use: sử dụng trong một function component
	 * dịch thô: sử dụng trạng thái
	 * lên số/ về số
	 *
	 */
	const [number, setNumber] = useState(10);
	const [align, setAlign] = useState("center");
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [color, setColor] = useState("black");
	const [inputValue, setInputValue] = useState("");
	const min = 10;
	const max = 20;
	/**
	 * let: khai báo biến, khai báo giá trị và có thể thay đổi giá trị trong quá trình sử dụng biến
	 * const: khai báo biến, khai báo giá trị và không thể thay đổi giá trị trong quá trình sử dụng biến
	 */
	const titles = ["Text Editor", "Subtitle"];
	return (
		<View style={styles.container}>
			{titles.map((title) => (
				<MyComponent
					title={title}
					key={title}
				/>
			))}
			<TextInput
				style={{
					height: 60,
					width: 200,
					borderRadius: 8,
					borderWidth: 1,
					fontSize: number,
					textAlign: align,
					fontWeight: isBold ? "bold" : "normal",
					fontStyle: isItalic ? "italic" : "normal",
					color, // color: color
				}}
				value={inputValue}
				onChangeText={setInputValue}
			/>
			{/* font size box */}
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						let newNumber = number - 1;
						if (newNumber < min) newNumber = max;
						setNumber(newNumber);
					}}
					style={styles.button}
				>
					<Text>-</Text>
				</TouchableOpacity>
				<Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 16 }}>{number}</Text>
				<TouchableOpacity
					onPress={() => {
						let newnumber = number - 1;
						if (newnumber > max) newnumber = min;
						setNumber(newnumber);
					}}
					style={styles.button}
				>
					<Text>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						setAlign("left");
					}}
				>
					<FontAwesome
						name="align-left"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setAlign("center");
					}}
				>
					<FontAwesome
						name="align-center"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setAlign("right");
					}}
				>
					<FontAwesome
						name="align-right"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						setIsBold(!isBold);
					}}
				>
					<MaterialIcons
						name="format-bold"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setIsItalic(!isItalic);
					}}
				>
					<MaterialIcons
						name="format-italic"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity onPress={() => setColor("red")}>
					<Text style={[styles.color, { color: "red" }]}>R</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={[styles.color, { color: "green" }]}>G</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={[styles.color, { color: "blue" }]}>B</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		width: 50,
		height: 50,
		borderRadius: 999,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	color: {
		fontSize: 40,
		fontWeight: "bold",
	},
});
