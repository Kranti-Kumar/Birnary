import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Decimal({ navigation }) {
  const [Binary, setBinary] = useState("");
  const [text, settext] = useState("");

  function F_Refresh() {
    setBinary("");
    settext("");
  }
  function F_Convert() {
    var a = Number(text);
    var z = "";
    while (a != 1) {
      var y = String(a % 2);
      z = y + z;
      a = parseInt(a / 2);
    }
    z = 1 + z;
    setBinary(z);
  }
  return (
    <View style={styles.container}>
      <View style={styles.HeaderB}>
        <Text style={styles.Header}>Decimal To Binary</Text>
      </View>

      <View style={styles.reverse}>
        <TouchableOpacity style={styles.Button1} onPress={F_Refresh}>
          <Text style={styles.convert}>Refresh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button1}
          onPress={() => navigation.navigate("Binary")}
        >
          <Text style={styles.convert}>Reverse</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.main}>Enter your Number (in Decimal)</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        defaultValue={text}
        onChangeText={(x) => settext(x)}
      />

      <Text style={styles.main}> Numbers Binary form</Text>
      <Text style={styles.output}>{Binary}</Text>

      <TouchableOpacity style={styles.Button} onPress={F_Convert}>
        <Text style={styles.convert}>Convert</Text>
      </TouchableOpacity>
      <Text style={styles.exampletext}>EXMAPLE :-</Text>
      <View style={styles.exampal}>
        <View>
          <Text style={styles.text}>Binary of 1 is 1</Text>
          <Text style={styles.text}>Binary of 2 is 10</Text>
          <Text style={styles.text}>Binary of 4 is 100</Text>
          <Text style={styles.text}>Binary of 8 is 1000</Text>
        </View>
        <View>
          <Text style={styles.text}>Decimal of 11 is 3 </Text>
          <Text style={styles.text}>Decimal of 111 is 7</Text>
          <Text style={styles.text}>Decimal of 1111 is 15 </Text>
          <Text style={styles.text}>Decimal of 11111 is 31</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00203FFF",
  },
  HeaderB: {
    alignItems: "center",
    marginTop: 30,
  },
  Header: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
    color: "#ADEFD1FF",
  },
  main: {
    fontSize: 23,
    margin: 15,
    color: "white",
  },
  input: {
    height: 50,
    color: "white",
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: "#ADEFD1FF",
    borderWidth: 2,
    padding: 10,
  },
  output: {
    margin: 20,
    marginTop: 5,
    fontSize: 20,
    height: 50,
    borderRadius: 5,
    borderColor: "#ADEFD1FF",
    borderWidth: 2,
    color: "white",
    padding: 10,
  },
  Button: {
    height: 50,
    width: 150,
    margin: 20,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#ADEFD1FF",
    justifyContent: "center",
  },
  Button1: {
    height: 40,
    width: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#ADEFD1FF",
    justifyContent: "center",
  },
  convert: {
    fontSize: 20,
    alignSelf: "center",
    color: "#00203FFF",
  },
  reverse: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exampletext: {
    fontSize: 24,
    color: "#ADEFD1FF",
    margin: 10,
  },
  exampal: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 16,
    color: "white",
    margin: 5,
  },
});
