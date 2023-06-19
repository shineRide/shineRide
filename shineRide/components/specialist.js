import React from "react";
import {
  HStack,
  Center,
  Box,
  VStack,
  Text,
  ScrollView,
  View,
  Image,
} from "native-base";
import Rating from "./Rating";

const specialist = () => {
  const data = [
    {
      id: 1,
      name: "hedi tolier",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195587/Untitled_design_20_tikffl.png",
      service: "CarWash",
    },
    {
      id: 2,
      name: "hssin electricien",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195794/Untitled_design_21_soghva.png",
      service: "Polishing",
    },
    {
      id: 1,
      name: "hedi tolier",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195972/Untitled_design_22_u1h013.png",
      service: "EngineWash",
    },
    {
      id: 2,
      name: "hssin electricien",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196269/Untitled_design_23_bjbeiu.png",
      service: "CarpetWash",
    },
    {
      id: 1,
      name: "hedi tolier",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196612/Untitled_design_24_vvkiay.png",

      service: "CarWash",
    },
    {
      id: 2,
      name: "hssin electricien",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196740/Untitled_design_25_bf8kez.png",
      service: "EngineWash",
    },
    {
      id: 1,
      name: "hedi tolier",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687197046/Untitled_design_26_rjxcpu.png",
      service: "InteriorWash",
    },
    {
      id: 2,
      name: "hssin electricien",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687197168/Untitled_design_27_gyyfcw.png",
      service: "Clean Carpet",
    },

    // Add more data objects as needed
  ];
  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    const pair = data.slice(i, i + 2);
    pairs.push(pair);
  }
//function specialist , declarit array of objects esmou data fih lurl mtea taswira ,o lfazet lokhrin , baed declarit 
// pairs li houwa empty array  ; o loupit 3al array lekbir mte3 data , nekhou mennou zouz objects 7atyt hom f array esmou pair ,
// khater .slice ta3tyni array , pairs.push pair o mba3ed bch nmapi aal pairs bch yjini bezouz bezouz
  return (
    <ScrollView>
      <VStack space={2} alignItems="center">
        {pairs.map((pair, index) => (
          <HStack key={index} space={5}>
            {pair.map((item) => (
              <Center style={{ top: 14 }} key={item.id}>
                {/* <Avatar
                   bg="pink.600"
                   size="xl"
                   source={{ uri: item.imageUrl }}
                   alt="Avatar"
                 >
                   GG
                 </Avatar> */}
                <Box
                  style={{
                    width: 180,
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <Center>
                    <Image
                      style={{ top: 10, width: 160 }}
                      borderRadius={10}
                      source={{
                        uri: item.imageUrl,
                      }}
                      alt="Alternate Text"
                      size="xl"
                    />

                    <Text
                      style={{
                        top: 11,
                        fontSize: 14,
                        fontWeight: "800",
                        textTransform: "uppercase",
                        color: "#1B4E9C",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        top: 8,
                        fontWeight: "500",
                        color: "#1B4E9C",
                        fontSize: 12,
                      }}
                    >
                      {item.service}
                    </Text>
                    {/* <Text>{"rating"}</Text> */}
                    <View style={{ height: 50, top: 7 }}>
                      <Rating />
                    </View>
                  </Center>
                </Box>
              </Center>
            ))}
          </HStack>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default specialist;
