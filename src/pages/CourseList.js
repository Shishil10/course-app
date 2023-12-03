import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import courseModel from '../database/courseModel';
import '../styles/CourseListingPage.css';

const CourseListingPage = () => {
    // State to manage the search 
    const [searchTerm, setSearchTerm] = useState('');

    // Filter courses based on the search keyword
    const filteredCourses = courseModel.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="search-container mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by course or instructor"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="course-list list-group">
                {filteredCourses.map((course) => (
                    <li key={course.id} className="list-group-item">
                        <Link to={`/course/${course.id}`} className="course-link text-decoration-none">
                            <span className="course-name">{course.name}</span> - <span className="instructor">{course.instructor}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseListingPage;
