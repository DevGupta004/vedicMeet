import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import IconComponent from '../../../components/icon/icon-component';

const CourseList = () => {
  const renderCourseDetails = () => {
    return (
      <View style={styles.courseDetailsContainer}>
        <Text style={styles.courseTitle}>Course Title</Text>
        <Text style={styles.courseDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          risus id risus tincidunt, ut mollis tortor consequat.
        </Text>
      </View>
    );
  };

  const renderIcons = () => {
    return (
      <View style={styles.iconsContainer}>
        <IconComponent name={'long-arrow-alt-right'} size={32} style={styles.icon} />
        <IconComponent name={'eye-slash'} size={32} style={styles.icon} />
        <IconComponent name={'heart'} size={32} style={styles.icon} />
        <IconComponent name={'exclamation-circle'} size={32} style={styles.icon} />
      </View>
    );
  };

  return (
    <View style={styles.coursesContainer}>
      {renderCourseDetails()}
      <View style={styles.verticalLine}></View>
      {renderIcons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coursesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  courseDetailsContainer: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  iconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginVertical: 10,
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: 'grey',
    marginHorizontal: 20,
  },
});

export default CourseList;
