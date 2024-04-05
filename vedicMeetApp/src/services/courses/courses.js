import apiService from '../apiService/api-service';

const endPoint = 'https://vedic-meet-course-api.vercel.app/api/courses/';

async function getAllCourses() {
    try {
        const response = await apiService.get(endPoint);
        console.log("getAllCourses fetched", response.data.courses);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default {
    getAllCourses,
};