import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/StudentList.css';

export default function StudentList() {
  const courses = useSelector(state => state.courses);

  // Getting all students list from redux
  const students = courses.map(course => course.students).flat();

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Student List</h1>

      <table className="table text-center">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  to={`/student-dashboard/${student.id}`}
                  className="student-link text-decoration-none"
                >
                  {student.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
