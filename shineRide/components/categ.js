// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   findNodeHandle,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   FlatList,
//   Animated,
//   Image,
// } from "react-native";

// const { width, height } = Dimensions.get("screen");

// const images = {
//   CarWash:
//     "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687193937/Untitled_design_15_rtdk6u.png",
//   Engine:
//     "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194248/Untitled_design_16_qfsuma.png",
//   InteriorClean:
//     "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194434/Untitled_design_17_rpithn.png",
//   Polishing:
//     "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194678/Untitled_design_18_dw7mjq.png",
//   Carpet:
//     "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194916/Untitled_design_19_loid7h.png",
// };
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
// }));

// const Tab = ({ item }) => {
//   return (
//     <View>
//       <Text
//         style={{
//           color: "white",
//           fontSize: 10,
//           fontWeight: "800",
//           textTransform: "uppercase",
//         }}
//       >
//         {item.title}
//       </Text>
//     </View>
//   );
// };

// const Indicator = () => {
//   return (
//     <View
//       style={{
//         position: "absolute",
//         height: 4,
//         width: 100,
//         backgroundColor: "white",
//         bottom: -10,
//       }}
//     />
//   );
// };

// const Tabs = () => {
//   return (
//     <View style={{ position: "absolute", top: 30, width }}>
//       <View
//         style={{
//           justifyContent: "space-evenly",
//           flex: 1,
//           flexDirection: "row",
//         }}
//       >
//         {data.map((item) => {
//           return <Tab key={item.key} />;
//         })}
//       </View>
//       <Indicator />
//     </View>
//   );
// };

// export default function categ() {
//   scrollX = React.useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Animated.FlatList
//         data={data}
//         keyExtractor={(item) => item.key}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         bounces={false}
//         renderItem={({ item }) => {
//           return (
//             <View style={{ width, height }}>
//               <Image
//                 source={{ uri: item.image }}
//                 style={{ flex: 1, resizeMode: "cover" }}
//               />
//               <View
//                 style={[
//                   StyleSheet.absoluteFillObject,
//                   { backgroundColor: "rgba(0,0,0,0.3)" },
//                 ]}
//               />
//             </View>
//           );
//         }}
//       />
//       <Tabs scrollX={scrollX} data={data} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const images = {
  CarWash:
    "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687193937/Untitled_design_15_rtdk6u.png",
  Engine:
    "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194248/Untitled_design_16_qfsuma.png",
  InteriorClean:
    "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194434/Untitled_design_17_rpithn.png",
  Polishing:
    "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194678/Untitled_design_18_dw7mjq.png",
  Carpet:
    "https://res.cloudinary.com/dvnuvw9rt/image/upload/c_scale,h_1500,w_1000/v1687194916/Untitled_design_19_loid7h.png",
};
const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
}));

const Tab = React.forwardRef(({ item }, ref) => {
  return (
    <View ref={ref}>
      <Text
        style={{
          color: "white",
          fontSize: 10,
          fontWeight: "800",
          textTransform: "uppercase",
        }}
      >
        {item.title}
      </Text>
    </View>
  );
});

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * width);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        // width: measures[0].width,
        // left:measures[0].x,
        width: indicatorWidth,
        left: 0,
        backgroundColor: "white",
        bottom: -10,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = () => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    let m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({ x, y, width, height });

          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);
  console.log(measures);
  return (
    <View style={{ position: "absolute", top: 30, width }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row",
        }}
      >
        {data.map((item) => {
          return <Tab key={item.key} item={item} ref={item.ref} />;
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default function categ() {
  scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.3)" },
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
