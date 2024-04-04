import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import HeaderComponent from '../../components/header/header-component';
import IconComponent from '../../components/icon/icon-component';
import HomeOptions from './component/home-options';

const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent />
        <HomeOptions />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
