import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import IconComponent from '../../../components/icon/icon-component';
import coursesService from '../../../services/courses/courses';

const CourseList = () => {
  // State to manage the visibility of Shortlisted icon for each course
  const [shortListedIcons, setShortListedIcons] = useState(
    new Array(200).fill('bookmark-outline'),
  );
  const [getCourseData, setCourseData] = useState([]);

  useEffect(() => {
    coursesService.getAllCourses().then(courses => {
      setCourseData(courses);
    });
  }, []);

  // Dummy data
  let courseData = [
    {
      title: 'React Native Development',
      description:
        'Master React Native development with this comprehensive course. This is a long description that will wrap to multiple lines if it exceeds the width of its container.',
      rating: 4.5,
      price: '$99',
      courseDuration: '6',
      totalEnrolled: 57,
      contact: {
        phone1: '+91 9824524545',
        phone2: '+91 9842311778',
      },
    },
    // Add more courses as needed
    {
      title: 'Python Crash Course',
      description:
        'Master React Native development with this comprehensive course',
      rating: 4,
      price: '$59',
      courseDuration: '12',
      totalEnrolled: 10,
      contact: {
        phone1: '+91 9824524545',
        phone2: '+91 9842311778',
      },
    },
    {
      title: 'React Native Development',
      description:
        'Master React Native development with this comprehensive course. This is a long description that will wrap to multiple lines if it exceeds the width of its container.',
      rating: 2.5,
      price: '$99',
      courseDuration: '6',
      totalEnrolled: 30,
      contact: {
        phone1: '+91 9876543210',
        phone2: '+91 9876543210',
      },
    },
    {
      title: 'React Native Development',
      description:
        'Master React Native development with this comprehensive course. This is a long description that will wrap to multiple lines if it exceeds the width of its container.',
      rating: 2.5,
      price: '$99',
      courseDuration: '6',
      totalEnrolled: 30,
      contact: {
        phone1: '+91 9876543210',
        phone2: '+91 9876543210',
      },
    },
  ];

  if (getCourseData) {
    courseData = getCourseData;
  }

  // Function to render course details
  const renderCourseDetails = () => {
    return (
      <View style={styles.container}>
        {courseData.map((course, index) => (
          <View
            key={index}
            style={[
              styles.coursesContainer,
              index % 2 === 0 ? styles.evenBackground : styles.oddBackground,
            ]}>
            <View style={styles.courseDetailsContainer}>
              {/* Title */}
              <Text style={styles.courseTitle}>{course.title}</Text>

              {/* Rating */}
              <View style={styles.ratingContainer}>
                {[...Array(Math.floor(course.rating))].map((_, index) => (
                  <IconComponent
                    key={index}
                    name="star"
                    size={16}
                    color="black"
                    style={styles.ratingIcon}
                  />
                ))}
                {/* If the rating has a decimal value, render a half star */}
                {course.rating % 1 !== 0 && (
                  <IconComponent
                    name="star-half"
                    size={16}
                    color="black"
                    style={styles.ratingIcon}
                  />
                )}
              </View>

              {/* Description */}
              <View style={styles.courseDescriptionContainer}>
                <Text style={styles.courseDescription} numberOfLines={2}>
                  {course.description}
                </Text>
              </View>

              {/* Row for totalEnrolled, courseDuration, and price */}
              <View style={styles.detailsRowContainer}>
                {/* Total Enrolled */}
                <View style={styles.detailsDataColumn}>
                  <Text style={styles.detailsData}>{course.totalEnrolled}</Text>
                  <Text style={styles.detailsText}>Enrolled</Text>
                </View>

                {/* Course Duration */}
                <View style={styles.detailsDataColumn}>
                  <Text style={styles.detailsData}>
                    {course.courseDuration}
                  </Text>
                  <Text style={styles.detailsText}>Month</Text>
                </View>

                {/* Price */}
                <View style={styles.detailsDataColumn}>
                  <Text style={styles.detailsData}>{course.price}</Text>
                  <Text style={styles.detailsText}>Price</Text>
                </View>
              </View>

              {/* Contact Info */}
              <View style={styles.contactContainer}>
                <Text style={styles.contactText}>{course.contact.phone1}</Text>
                <Text style={styles.contactText}>{course.contact.phone2}</Text>
              </View>
            </View>

            {/* Render icons */}
            {renderIcons(index)}
          </View>
        ))}
      </View>
    );
  };

  // Function to render icons
  const renderIcons = index => {
    // Function to toggle the Shortlisted icon for a specific course
    const showShortListedItem = () => {
      console.log(`Clicked On CourseList ${index}`);
      // Toggle between 'bookmark' and 'bookmark-outline' for the specific course
      const updatedIcons = [...shortListedIcons];
      updatedIcons[index] =
        updatedIcons[index] === 'bookmark' ? 'bookmark-outline' : 'bookmark';
      setShortListedIcons(updatedIcons);
    };

    // Data for icons
    const iconsData = [
      {
        name: 'arrow-forward-outline',
        text: 'Details',
        size: 40,
        color: '#8d4337',
        type: 0,
      },
      {
        name: 'eye-off-outline',
        text: 'Hide',
        size: 40,
        color: '#8d4337',
        type: 0,
      },
      {
        name: shortListedIcons[index],
        text: 'Shortlisted',
        size: 40,
        color: '#8d4337',
        type: 0,
        function: showShortListedItem,
      },
      {
        name: 'alert-circle-outline',
        text: 'Report',
        size: 40,
        color: '#8d4337',
        type: 0,
      },
    ];

    return (
      <View style={styles.iconsContainer}>
        {iconsData.slice(0, 4).map((icon, index) => (
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
    );
  };

  return renderCourseDetails();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'flex-start',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  evenBackground: {backgroundColor: '#fefdf2'},
  oddBackground: {backgroundColor: '#fff'},
  courseDetailsContainer: {
    flex: 1,
    marginRight: 16, // Add some margin between title/description and remaining details
  },
  courseTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  courseDescriptionContainer: {
    marginBottom: 12,
    paddingVertical: 16,
  },
  courseDescription: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    flexWrap: 'wrap',
    marginBottom: 8, // Add some margin to separate it from other elements
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingIcon: {
    marginRight: 8,
  },
  contactContainer: {
    paddingVertical: 32,
  },
  contactText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  detailsDataColumn: {
    marginEnd: 56,
    alignItems: 'center',
  },
  detailsData: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  detailsText: {
    color: '#000',
  },
  iconsContainer: {},
  iconWithText: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8d4337',
  },
  icon: {
    marginVertical: 2,
  },
});

export default CourseList;
