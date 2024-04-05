import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconComponent from '../icon/icon-component';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}></Image>
      <Text style={styles.appName}>VedicMeet</Text>
      <IconComponent style={styles.menuButton} name={'ellipsis-v'} color={'#3b302f'} size={24} type={1} />
    </View>
  );
};

export default HeaderComponent;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  logo: {
    height: 56,
    width: 56,
    resizeMode: 'contain',
    margin: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5,
  },
  menuButton: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
});
