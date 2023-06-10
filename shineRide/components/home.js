import React from "react";
import {
  VStack,
  Box,
  Center,
  Text,
  Input,
  Icon,
  ScrollView,
  HStack,
} from "native-base";
import { exploreData } from "./data";
import { FlatList} from "react-native";
import { ImageBackground, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Service from "./service";
import Header from "./header";
import PopularServices from "./services";
const hello = () => {
  return (
    <><ScrollView>
      <VStack>
        <Box height={250} width="100%">
          <ImageBackground
            marginTop={-75}
            source={{
              uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685917191/Untitled_design_15_cwtrku.png",
            }}
            style={styles.backgroundImage}
          >
            <Center>
              <Text color="#FFF" marginBottom={10} fontSize={25}>
                Welcome to shineRide
              </Text>
              <Input
                bgColor={"#FFF"}
                placeholder="Search"
                variant="filled"
                width="300"
                borderColor={"muted.200"}
                borderRadius="35"
                py="2"
                px="2"
                _focus={{ borderColor: "#FFF" }}
                InputRightElement={
                  <Icon
                    mr="5"
                    size="6"
                    color="#000"
                    as={<Ionicons name="ios-search" />}
                  />
                }
              />
            </Center>
          </ImageBackground>
        </Box>

        <Box>
        <Text
              style={{
                fontSize: 20,
                marginLeft:40 ,
                color: "#1B4E9C",
                marginTop:20,
                // marginBottom: 100,
                fontWeight: "bold",
              }}
            >
              service
            </Text>
          <HStack>
    
            <Service
              imageUri={{
                uri: "https://fr.gravatar.com/userimage/236074333/e1b9de5636afb02e0ab9abc2094ec575.png?size=200",
              }}
              name="Car Wash"
            />
            <Service
              imageUri={{
                uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685919322/Untitled_design_23_e0ufhr.png",
              }}
              name="Interior Clean"
            />
          </HStack>
          <HStack>
            <Service
              imageUri={{
                uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685919237/Untitled_design_22_ziuz5c.png",
              }}
              name="Polishing"
            />
            <Service
              imageUri={{
                uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685919423/Untitled_design_24_xvie6s.png",
              }}
              name="Engine Wash"
            />
          </HStack>
        </Box>
      </VStack>
    </ScrollView>
    
    <PopularServices  data={exploreData}  />
    </>
    
    
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default hello;
