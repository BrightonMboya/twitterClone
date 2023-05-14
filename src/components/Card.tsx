import { View, Text, Image, StyleSheet } from "react-native";

interface CardProps {
  name: string;
  title: string;
  content: string;
  profile: string;
}

const Card = ({ name, title, content, profile }: CardProps) => {
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
        </View>
        <View>
          <Text style={{ marginTop: 2, paddingLeft: 10 }}>{title}</Text>
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
    height: 100,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
});
