import React from "react";
import { Text, Button } from "react-native";

const Profile = ({ navigation }: any) => {
  return (
    <>
      <Text style={{ margin: 50 }}>Some Fancy ass Profile</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
};

export default Profile;
