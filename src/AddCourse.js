
import React, { useState } from 'react';
// import from reactbootstrap
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CourseService from './CourseService';

function AddCourse() {
    const baseURL = "http://localhost:3000/courses";

    const navigate = useNavigate();

    // hooks

    const [courseName, setcourseName] = useState('');
    const [courseDesc, setcourseDesc] = useState('');

    // coursename change handler
    const courseNameChangeHandler = (event) => {

        setcourseName(event.target.value);
        // console.log(event.target.value);
    };

    // coursename desc handler
    const courseDescChangeHandler = (event) => {

        setcourseDesc(event.target.value);
        // console.log(event.target.value);
    };


    // Add sumbitactiohandler

    const submitActionHandler = (event) => {
        event.preventDefault();
        // console.log("test");
        //  axios.post(baseURL, {
        //     name: courseName,
        //     description: courseDesc
        //   })
        //   .then((response) => {
        //     console.log(response);
        //           alert("Course " + courseName + " is added!");
        //           navigate("/");
        //         }).catch(error => {
        //           alert("error===" + error);
        //         });

        CourseService.createCourse({ name: courseName, description: courseDesc })
            .then((response) => {
                alert("Course " + ":" + courseName + ":" + courseDesc + " added!");
                navigate("/");
            }).catch(error => {
                alert("error===" + error);
            });


    }

    return (
        <div className="App">
            <Alert variant='primary'>
                <Container>
                    <Form onSubmit={submitActionHandler}>
                        <Form.Group controlId="form.Name" >
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter The Course" value={courseName} onChange={courseNameChangeHandler} required />
                        </Form.Group>
                        <Form.Group controlId="form.Role">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter the description" value={courseDesc} onChange={courseDescChangeHandler} required />
                        </Form.Group>
                        <br></br>
                        <Button type='submit'>Add Course</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type='submit'>Cancel</Button>
                    </Form>

                </Container>
            </Alert>

        </div>

    );
}
export default AddCourse;