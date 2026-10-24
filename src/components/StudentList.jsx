// Q9: map() se list
function StudentList() {
  const students = ["Aman", "Riya", "Rahul", "Sneha", "Karan"];

  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}

export default StudentList;
