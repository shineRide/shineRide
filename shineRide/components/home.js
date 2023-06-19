import React from "react";
import {
  VStack,
  Avatar,
  Box,
  Center,
  Text,
  Input,
  Icon,
  ScrollView,
  HStack,
  Image,
} from "native-base";

import { ImageBackground, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "./theme";
import Rating from "./Rating";

import StyledText from "./styledText";
const hello = () => {
  return (
    //view hedhi zedneha bch nbadlou l backgroundcolor lel blanc ;
    <View
      style={{
        backgroundColor: "#ffff",
      }}
    >
      {/* ScrollView bch ywali ynajem yescrolli */}
      <ScrollView>
        {/* Vstack  bch tzid ay haja tetzed verticalement  */}
        <VStack>
          {/* box bch n7otou fih taswira mte3 logo */}
          <Box height={250} width="100%">
            {/* hedhi l ImagaBackground li 7atyneha fl box li feha logo mtea shineRide */}
            <ImageBackground
              marginTop={-75}
              source={{
                uri: "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1685976216/ShineRide_z2mp6y.png",
              }}
              style={styles.backgroundImage}
            >
              {/* 7atyna center tag bch tet7at liinput mtea search bar fel woset */}
              <Center>
                <Input
                  bgColor={"#FFF"}
                  top={70}
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
                      color="#f14e24"
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
                marginLeft: 20,
                color: "#1B4E9C",
                marginTop: 20,
                // marginBottom: 100,
                fontWeight: "bold",
              }}
            >
              service
            </Text>
            <Text></Text>
            <Box
              style={{
                marginLeft: 5,
                height: 250,

                borderRadius: 20,
                borderWidth: 2,
                borderColor: "#0000",
                backgroundColor: "#0001",
              }}
            >
              <HStack></HStack>
              {/* Hstack bch 3 tsawer mte3 service y=etzedou horizontalement */}
              <HStack style={{ marginTop: 10 }}>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://fr.gravatar.com/userimage/236074333/e1b9de5636afb02e0ab9abc2094ec575.png?size=200",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Car Wash
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685919322/Untitled_design_23_e0ufhr.png",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Interior Clean
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dk9hepbrk/image/upload/v1685919237/Untitled_design_22_ziuz5c.png",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Polishing
                  </StyledText>
                </TouchableOpacity>
              </HStack>

              <HStack></HStack>
              <Text></Text>
              <HStack>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1685978162/Untitled_design_25_xnwef0_g2b5el.png",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Carpet Clean
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1685978555/Untitled_design_26_a4ayjr_pi3jtq.png",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Tire Dressing
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container]}>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1685978718/Untitled_design_27_nq3hzb_mxwpzb.png",
                    }}
                    style={[styles.image, StyleSheet.absoluteFill]}
                  />

                  <StyledText style={styles.title} bold>
                    Engine Wash
                  </StyledText>
                </TouchableOpacity>
              </HStack>
            </Box>
          </Box>
        </VStack>
        <HStack>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              color: "#1B4E9C",
              marginTop: 20,
              // marginBottom: 100,
              fontWeight: "bold",
            }}
          >
            Specialist
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 215,
              color: "#1B4E9C",
              marginTop: 20,
              // marginBottom: 100,
              fontWeight: "bold",
            }}
          >
            View All
          </Text>
        </HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack>
            <View
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    Tijjani bou3okez
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
            <View
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    fawzi ben gamra
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
            <View
              style={{
                height: 150,
                marginBottom: 100,

                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    Lotfi louay
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
          </HStack>
        </ScrollView>
        <HStack>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              color: "#1B4E9C",
              marginTop: 20,
              // marginBottom: 100,
              fontWeight: "bold",
            }}
          >
            Categories
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 215,
              color: "#1B4E9C",
              marginTop: 20,
              // marginBottom: 100,
              fontWeight: "bold",
            }}
          >
            View All
          </Text>
        </HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack>
            <View
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    hello
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
            <View
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    hello
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
            <View
              style={{
                height: 150,
                marginBottom: 100,

                width: 150,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/1304509203/photo/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=612x612&w=0&k=20&c=_GKYMFSq_xF4QzOD9fg-S5hNNZXEJIIQA1M1x-81_7A=",
                  }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: "#1B4E9C",
                    }}
                  >
                    hello
                  </Text>
                </HStack>
              </View>
              <Rating />
            </View>
          </HStack>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 250,
    marginTop: 40,
  },
  container: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 60,
  },

  title: {
    fontSize: 19,
    color: colors.primary,
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#0008",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#1B4E9C",
  },
});

export default hello;
