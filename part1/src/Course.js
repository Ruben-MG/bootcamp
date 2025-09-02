export const Course = ({ course }) => {
  const items = course.map((intro) => (
    <li key={intro.id}>
      {intro.name}
      {intro.parts.map((parts) => (
        <ul key={parts.id}>
          {parts.name} {parts.exercises}
        </ul>
      ))}
      <p><strong>Total of {intro.parts.reduce((total, part) => total + part.exercises, 0)} exercises</strong></p>
    </li>
  ));


  return (
    <div>
      <h1>{course.name}</h1>
      <ul>{items}</ul>
    </div>
  );
};
