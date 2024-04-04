import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import HeaderComponent from '../../components/header/header-component';
import HomeOptions from './component/home-options';
import CourseList from './component/course-list';

const HomeScreen = () => {

    const showShortListedItem = () => {
        console.log('clicked On HomeScreen');
      }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent />
        <HomeOptions onPress={showShortListedItem}/>
        <CourseList></CourseList>
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
