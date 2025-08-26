const Course = ({ course }) => {
  const items = course.parts.map((part) => (
    <li key={part.id}>
      {part.name} {part.exercises}
    </li>
  ));
  const suma = course.parts.reduce((total, part) => total + part.exercises,0)

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>{items}</ul>
      <p><strong>Total of {suma} exercises</strong></p>
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
