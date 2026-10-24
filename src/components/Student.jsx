// Q4: Props: name, course, age
function Student({ name, course, age }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Student;
