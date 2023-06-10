<VStack>

<Box height={150}  backgroundColor={"##1B4E9C"} Width="100%">
<Center>
   <Text color={"#FFF"} marginTop={75} fontSize={18}>
     welcome to shineRide
   </Text>
</Center>
</Box>
<Center   backgroundColor={'##1B4E9C'}>
           <Input
             bgColor={'#FFF'}
             placeholder="Search"
             variant="filled"
             width="250"
             borderColor={'muted.200'}
             borderRadius="35"
             py="1"
             px="2"
             _focus={{ borderColor: '#FFF' }}
             InputRightElement={
               <Icon
                 mr="2"
                 size="4"
                 color="#000"
                 as={<Ionicons name="ios-search" />}
               />
             }
           />
         </Center>
<Box height={75}  backgroundColor={"#7E69FF"} Width="100%">

</Box>
   </VStack>