import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default IconComponent = props => {

    // return different icons as per icon type
  switch (props.type) {
    case 0:
      return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
          <Ionicons
            size={props.size}
            name={props.name}
            color={props.color}
            solid
          />
        </TouchableOpacity>
      );
    case 1:
      return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
          <FontAwesome5
            size={props.size}
            name={props.name}
            color={props.color}
            solid
          />
        </TouchableOpacity>
      );
    case 2:
      return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
          <FontAwesome5
            size={props.size}
            name={props.name}
            color={props.color}
            solid
          />
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
          <FontAwesome5
            size={props.size}
            name={props.name}
            color={props.color}
            solid
          />
        </TouchableOpacity>
      );
  }
};
