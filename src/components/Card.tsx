import { View, Text, Image, StyleSheet, Button } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IoniIcons from "react-native-vector-icons/Ionicons";

interface CardProps {
  name: string;
  id: number;
  title: string;
  content: string;
  profile: string;
  navigation: any;
}

const Card = ({ name, title, content, profile, navigation, id }: CardProps) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: profile,
            }}
            style={{ width: 40, height: 40, borderRadius: 100 }}
          />
          <Text style={{ fontSize: 15 }}>{name}</Text>
          <Button
            title="Follow"
            onPress={() => {
              navigation.navigate("Profile", {
                id: id,
                otherParam: "Love you Daddy",
              });
            }}
          />
        </View>

        <Text style={{ marginTop: 2, paddingLeft: 10 }}>{title}</Text>
        <View style={styles.iconView}>
          <AntDesign name="like2" size={15} color="#ddd" />
          <AntDesign name="hearto" size={15} color="#ddd" />
          <IoniIcons name="chatbubble-outline" size={15} color="#ddd" />
          <IoniIcons name="paper-plane-outline" size={15} color="#ddd" />
        </View>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 350,
    height: 130,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
});
