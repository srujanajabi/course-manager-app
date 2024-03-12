import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

function List() {
    const baseURL = "http://localhost:3000";

    const [courses, setCourses] = useState([]);


    const setCourseData = () => {
        axios.get(baseURL + "/courses")
       
        .then((response) => {
            setCourses(response.data);
            // console.log(response.data);
        }).catch(error => {
            alert("Error Ocurred while loading data:" + error);
        });
    }

    useEffect(() => {
        setCourseData();
    }, []);

    const removeCourse = (id) => { 
             
        axios.delete(baseURL + "/courses/" +id)
        .then((response) => {
          alert("Course is deleted");
          setCourseData();
          
        }).catch(error => {
          alert("error==="+error);
        });
    }


    return (
        <div className="App">
            <h1>Course List</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        courses &&
                        courses.map((course, index) => (
                           

                        <tr>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.description}</td>


                            <td><FaEdit />  |

                                <button  onClick={() => removeCourse(course.id)}
                                    className="button"
                                >
                                    <FaTrash />
                                </button>

                            </td>

                        </tr>
                        ))
                    }

                </tbody>
            </Table>

        </div>

    );
}
export default List;