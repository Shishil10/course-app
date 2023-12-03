import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/StudentDashboard.css'; // Import your custom CSS file

export default function StudentDashboard() {
    // Getting the studentId parameter from the URL
    const { studentId } = useParams();

    // Getting the courses from the Redux store
    const courses = useSelector(state => state.courses);

    // Finding the course where the student is enrolled
    const course = courses.find(c =>
        c.students.some(s => s.id === parseInt(studentId))
    );

    // Getting student details
    const student = course?.students.find(s => s.id === parseInt(studentId));
     
    // If no student is found, display a message
    if (!student) {
        return <h2>No student found</h2>;
    }

    // Getting a list of courses the student is enrolled in
    const enrolledCourses = courses.filter(c =>
        student.courses.includes(c.id)
    );

    return (
        <div className="container mt-4 student-dashboard">
            <h1 className="mb-4">Students Dashboard</h1>
            <h2>Welcome, {student.name}!</h2>
            <h3>Your Enrolled Courses:</h3>
            <ul className="list-group">
                {enrolledCourses.map(course => (
                    <li key={course.id} className="list-group-item">
                        <div className="course-details">
                            <h4>{course.name}</h4>
                            <img width={100} src={course.thumbnail} alt="Course Thumbnail" />
                            <p>Instructor: {course.instructor}</p>
                            <p>Due Date: {course.dueDate}</p>
                            <p>
                                Progress: {course.completed ? 'Completed' : 'In Progress'}
                            </p>


                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
