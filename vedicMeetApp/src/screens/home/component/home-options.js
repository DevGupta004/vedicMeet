import {StyleSheet, Text, View} from 'react-native';
import IconComponent from '../../../components/icon/icon-component';

export default HomeOptions = () => {
  const iconsData = [
    {name: 'book', text: 'Contacts', size: 40, color: '#dea74f'},
    {name: 'image', text: 'Gallery', size: 40, color: '#3b302f'},
    {name: 'map-marker-alt', text: 'map', size: 40, color: 'gray'},
    {name: 'id-card-alt', text: 'Shortlisted', size: 40, color: '#3b302f'},
    {name: 'sort-amount-down-alt', text: 'Short', size: 40, color: '#3b302f'},
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
              />
              <Text style={styles.iconText}>{icon.text}</Text>
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
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
    width: 32,
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
