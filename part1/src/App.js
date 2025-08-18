const App = () => {
  //Variables
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //Funciones
  const Header = ({course}) => <h1>{course}</h1>

  const Part = ({part, exercises}) => <p>{part}{exercises}</p>

  const Content = () => {
      return (
            <div>
                <Part part={course.parts[0].name} exercises= {course.parts[0].exercises}/> 
                <Part part={course.parts[1].name} exercises= {course.parts[1].exercises}/> 
                <Part part={course.parts[2].name} exercises= {course.parts[2].exercises}/>
            </div>
    )
  }

  const Total = ({exercises1,exercises2,exercises3}) => {
    var total = exercises1+exercises2+exercises3
    return <p>Number of exercises {total}</p>
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content  part1={course.parts[0].name} exercises1={course.parts[0].exercises}
                part2={course.parts[1].name} exercises2={course.parts[1].exercises}
                part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

export default App