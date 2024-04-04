import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';



export default IconComponent = (props) => {
    
    return(
        <TouchableOpacity style={props.style} onPress={props.onPress}>
        <Icon size={props.size} name={props.name} color={props.color} solid />
      </TouchableOpacity>
    );
}