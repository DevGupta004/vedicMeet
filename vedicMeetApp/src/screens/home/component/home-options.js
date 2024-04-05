import {StyleSheet, Text, View} from 'react-native';
import IconComponent from '../../../components/icon/icon-component';

export default HomeOptions = (props) => {


    const showShortListedItem = () => {
        console.log('showShortListedItem clicked');
        props.onPress();
      }

  const iconsData = [
    {name: 'newspaper-outline', text: 'Contacts', size: 32, color: '#dea74f', type: 0},
    {name: 'image-outline', text: 'Gallery', size: 32, color: '#3b302f', type: 0},
    {name: 'map-marker-alt', text: 'map', size: 28, color: '#d7d6d6', type: 1},
    {name: 'id-card-alt', text: 'Shortlisted', size: 40, color: '#3b302f', type: 1, function:showShortListedItem},
    {name: 'sort-amount-down-alt', text: 'Short', size: 40, color: '#3b302f', type: 1},
  ];


  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.rightSideIconContainer}>
          {iconsData.slice(0, 3).map((icon, index) => (
            <View key={index} style={styles.iconWithText}>
              <IconComponent
                name={icon.name}
                size={icon.size}
                style={styles.icon}
                color={icon.color}
                type={icon.type}
                onPress={() => icon.function}
              />
              <Text style={[styles.iconText, index === 0 ?  {color: '#dea74f'} : {color: icon.color}]}>{icon.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.gap} />
        <View style={styles.leftSideIconContainer}>
          {iconsData.slice(3).map((icon, index) => (
            <View key={index} style={styles.iconWithText}>
              <IconComponent
                name={icon.name}
                size={icon.size}
                style={styles.icon}
                color={icon.color}
                type={icon.type}
                onPress={icon.function}
              />
              <Text style={styles.iconText}>{icon.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefffe',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
    marginVertical: 20,
  },
  leftSideIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightSideIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gap: {
    width: 80,
  },
  iconWithText: {
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 15,
  },
  iconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
  },
});
