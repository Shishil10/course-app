import React from 'react';
import { useParams } from 'react-router-dom';
import courseModel from '../database/courseModel';
import '../styles/CourseDetailsPage.css'; // Import your custom CSS file

const CourseDetailsPage = () => {
    // Getting the courseId  from the URL
    const { courseId } = useParams();
    // Finding the course with the matching id from the courseModel
    const course = courseModel.find((course) => course.id === parseInt(courseId));

    // If the course is not found, display a message
    if (!course) {
        return <div><h1>No Courses available please check again later !</h1></div>;
    }

    return (
        <div className="container mt-4 course-details">
            <h2 className="course-title">{course.name}</h2>
            <div className="details-container">
                <div className="detail-row">
                    <strong>Instructor:</strong> {course.instructor}
                </div>
                <div className="detail-row">
                    <strong>Description:</strong> {course.description}
                </div>
                <div className="detail-row">
                    <strong>Enrollment Status:</strong> {course.enrollmentStatus}
                </div>
                <div className="detail-row">
                    <strong>Duration:</strong> {course.duration}
                </div>
                <div className="detail-row">
                    <strong>Schedule:</strong> {course.schedule}
                </div>
                <div className="detail-row">
                    <strong>Location:</strong> {course.location}
                </div>
                <div className="detail-row">
                    <strong>Prerequisites:</strong> {course.prerequisites.join(', ')}
                </div>
            </div>
            <h3 className="syllabus-heading">Syllabus:</h3>
            <ul className="list-group syllabus-list">
                {course.syllabus.map((item) => (
                    <li key={item.week} className="list-group-item">
                        <div
                            className="d-flex justify-content-between align-items-center syllabus-header"
                            data-bs-toggle="collapse"
                            href={`#week${item.week}`}
                        >
                            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                            <span className="badge bg-primary rounded-pill">Details</span>
                        </div>
                        <div className="collapse" id={`week${item.week}`}>
                            <div className="mt-2 syllabus-details">
                                <span></span>{item.topic}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* You can add more details as needed */}
        </div>
    );
};

export default CourseDetailsPage;
