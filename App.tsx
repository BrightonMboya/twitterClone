import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Card from "./src/components/Card";
import { profiles } from "./src/components/dummyData";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <ScrollView>
      <View style={styles.nav}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <View>
          <Text style={{ fontSize: 20 }}>Brighton Mboya</Text>
          <Text style={{ marginTop: 5 }}>Senior Manager at Netflix</Text>
        </View>
      </View>
      <View style={[styles.container, styles.cardRow]}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 300,
            padding: 10,
            borderRadius: 5,
          }}
          placeholder="Search for your favourite profiles"
          onChangeText={(text) => setSearch(text)}
          defaultValue={search}
        />
        {/* add a search function here */}
        {profiles
          .filter((profile) => {
            if (search === "") {
              return profile;
            } else if (
              profile.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return profile;
            }
          })
          .map((profile) => (
            <Card
              key={profile.id}
              profile={profile.profile}
              name={profile.name}
              title={profile.text}
              content={profile.bio}
            />
          ))}

        {/* {profiles.map((profile) => (
          <Card
            key={profile.id}
            profile={profile.profile}
            name={profile.name}
            title={profile.text}
            content={profile.bio}
          />
        ))} */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    marginTop: 70,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  cardRow: {
    gap: 20,
    marginTop: 40,
  },
});

// function GetAutoCompleteResult(
//   query: string,
//   signal?: AbortSignal
// ): Promise<{ phoneNumber: string; fullName: string }[]> {
//   return new Promise((resolve, reject) => {
//     if (signal?.aborted) {
//       reject("Request aborted");
//     }
//     resolve(profiles.filter((profile) => profile.name.includes(query)));
//   });
// }
