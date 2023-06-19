
import { FlatList} from "react-native";




const PopularServices = ({data }) => {
 
  return (
  <FlatList  data={data}

  keyExtractor={({id})=> id.toString()}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{
    paddingLeft : 25,
    paddingTop : 25,

  }}
  />
  );
};



export default PopularServices;
