import axios from 'axios';

// const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";
 const COURSE_API_BASE_URL = "http://localhost:3000/courses";


class CourseService {
    // CRUD operation

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }

    createCourse(data){
        console.log(data)
        return axios.post(COURSE_API_BASE_URL, data);
    }

    
   

    deleteCourse(courseId){

       
        
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }
}

export default new CourseService()