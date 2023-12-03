// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './pages/CourseList';
import CourseDetailsPage from './pages/CourseDetail';
import StudentDashboard from './pages/StudentDashboard';
import StudentList from './pages/StudentList';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './component/Navbar';

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Routes>
        
          <Route path="/" exact element={<CourseList />} />
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
          <Route path="/students" element={<StudentList/>} />
          <Route path="/student-dashboard/:studentId" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
