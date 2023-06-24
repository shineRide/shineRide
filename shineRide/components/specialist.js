import React from "react";
import {
  Select,
  HStack,
  Modal,
  Center,
  Box,
  VStack,
  Text,
  ScrollView,
  View,
  Image,
  Button, Input, FormControl,
} from "native-base";
import Rating from "./Rating";
import Svg, { Path } from 'react-native-svg';
import LottieAnimationScreentwo from "./djhs";

const specialist = () => {
  const [service, setService] = React.useState("");

  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const days = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
  ];

  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];
  const data = [
    {
      id: 1,
      name: "hedhi ounifi",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195587/Untitled_design_20_tikffl.png",
      service: "CarWash",
    },
    {
      id: 2,
      name: "hssin makki",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195794/Untitled_design_21_soghva.png",
      service: "Polishing",
    },
    {
      id: 1,
      name: "mahdi nahdi",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687195972/Untitled_design_22_u1h013.png",
      service: "EngineWash",
    },
    {
      id: 2,
      name: "wissem chka",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196269/Untitled_design_23_bjbeiu.png",
      service: "CarpetWash",
    },
    {
      id: 1,
      name: "lotfi bosri",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196612/Untitled_design_24_vvkiay.png",

      service: "CarWash",
    },
    {
      id: 2,
      name: "wael ouartani",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687196740/Untitled_design_25_bf8kez.png",
      service: "EngineWash",
    },
    {
      id: 1,
      name: "Hedi bichkou",
      imageUrl:
        "https://res.cloudinary.com/dvnuvw9rt/image/upload/v1687197046/Untitled_design_26_rjxcpu.png",
      service: "InteriorWash",
    },
    {
      id: 2,
      name: "khaled nebli",
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
    // <ScrollView>
    //   <VStack space={2} alignItems="center">
    //     {pairs.map((pair, index) => (
    //       <HStack key={index} space={5}>
    //         {pair.map((item) => (
    //           <Center style={{ top: 14 }} key={item.id}>
    //             {/* <Avatar
    //                bg="pink.600"
    //                size="xl"
    //                source={{ uri: item.imageUrl }}
    //                alt="Avatar"
    //              >
    //                GG
    //              </Avatar> */}
    //             <Box
    //               style={{
    //                 width: 180,
    //                 backgroundColor: "white",
    //                 borderRadius: 10,
    //               }}
    //             >
    //               <Center>
    //                 <Image
    //                   style={{ top: 10, width: 160 }}
    //                   borderRadius={10}
    //                   source={{
    //                     uri: item.imageUrl,
    //                   }}
    //                   alt="Alternate Text"
    //                   size="xl"
    //                 />
            
                
    //                   <Text
    //                     style={{
    //                       top: 11,
    //                       right: 30,
    //                       fontSize: 14,
    //                       fontWeight: "800",
    //                       textTransform: "uppercase",
    //                       color: "#1B4E9C",
    //                     }}
    //                   >
    //                     {item.name}
    //                   </Text>
    //                   <Text
    //                     style={{
    //                       top: 8,
    //                       right: 40,
    //                       fontWeight: "500",
    //                       color: "#1B4E9C",
    //                       fontSize: 12,
    //                     }}
    //                   >
    //                     {item.service}
    //                   </Text>
                   

    //                 {/* <Text>{"rating"}</Text> */}
    //                 <View style={{ height: 50, top: 7 }}>
    //                   <Rating />
    //                 </View>
    //               </Center>
    //             </Box>
    //           </Center>
    //         ))}
    //       </HStack>
    //     ))}
    //   </VStack>
    // </ScrollView>
    <>
     <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Book Now</Modal.Header>
          <Modal.Body>
            <HStack >

          <Select selectedValue={service} marginLeft={5} minWidth="90" accessibilityLabel="Choose day" placeholder="Choose day" _selectedItem={{
            bg: "teal.600"}}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <Select  marginLeft={5} selectedValue={service} minWidth="90" accessibilityLabel="Choose Month" placeholder="Choose Month" _selectedItem={{
        bg: "teal.600"}}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      
          </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    <ScrollView>
      <VStack space={2} alignItems='center'>
        {pairs.map((pair, index) => (
          <HStack key={index} space={5}>
            {pair.map((item) => (
              <Center style={{ top: 14 }} key={item.id}>
                <Box
                  style={{
                    width: 180,
                    backgroundColor: 'white',
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
                      alt='Alternate Text'
                      size='xl'
                    />

                    <HStack >
                    <View style={{ height: 50,  top: 7 }}>
                    </View>
                 
                      <VStack marginTop={5}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            color: '#1B4E9C',
                          }}
                        >
                          {item.name}
                        </Text>
                        <Center>

                        <Text
                          style={{
                            fontWeight: '500',
                            color: '#1B4E9C',
                            fontSize: 12,
                          }}
                          >
                          {item.service}
                        </Text>
                          </Center>
                      </VStack>
                    </HStack>

                    <View style={{ height: 50, top: 7 }}>
                      <Rating />
                     
                    </View> <Button  height={10} width={150}    onPress={() => {
        setModalVisible(!modalVisible);
        console.log("hii");
      }}
            >book now</Button>
                  </Center>
                </Box>
              </Center>
            ))}
          </HStack>
        ))}
      </VStack>
    </ScrollView>
    </>
  );
};

export default specialist;
