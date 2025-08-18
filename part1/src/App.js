const App = () => {
  //Variables
  const course = 'Half Stack application development '
  const parts = [
    {
      name: 'Fundamentals of React ',
      exercises: 10
    },
    {
      name: 'Using props to pass data ',
      exercises: 7
    },
    {
      name: 'State of a component ',
      exercises: 14
    }
  ]
  //Funciones
  const Header = ({course}) => <h1>{course}</h1>

  const Part = ({part, exercises}) => <p>{part}{exercises}</p>

  const Content = () => {
      return (
            <div>
                <Part part={parts[0].name} exercises= {parts[0].exercises}/> 
                <Part part={parts[1].name} exercises= {parts[1].exercises}/> 
                <Part part={parts[2].name} exercises= {parts[2].exercises}/>
            </div>
    )
  }

  const Total = ({exercises1,exercises2,exercises3}) => {
    var total = exercises1+exercises2+exercises3
    return <p>Number of exercises {total}</p>
  }


  return (
    <div>
      <Header course={course}/>
      <Content  part1={parts[0].name} exercises1={parts[0].exercises}
                part2={parts[1].name} exercises2={parts[1].exercises}
                part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )
}

export default App