import React  from 'react'
import "./Project.css"

const Project = ({data}) => {

 const datas=[{
    "id":1,
    "name":"To-Do-List",
    "img":"https://screenshots.codesandbox.io/7fj0k/5.png",
   "lang":"HTML - CSS - React",
   "about":"A to-do list contains all the tasks that need to be done and can be ticked off accordingly. It is suitable for every person involved in a project, as it can be customized and provides more clarity.",
    "link":"https://github.com/Niviss/Reactcode/tree/main/ToDoList",
    "demo":"https://github.com/Niviss/Reactcode/tree/main/ToDoList"
  },

{
    "id":2,
    "name":"Digital clock",
    "img":"https://codingartistweb.com/wp-content/uploads/2021/04/digital-clock-small-01.png",
    "lang":"HTML - CSS - Javascript",
    "about":"A digital clock is an alternative to a traditional analogue clock. This type of clock shows numbers to display the time in a digital format, such as on a watch, phone or an alarm clock. This can be in both 12 and 24 hour formats.",
    "link":"https://github.com/Niviss/Reactcode/tree/main/digital%20clock",
    "demo":"https://onecompiler.com/html/42ksrku9b"
},
{
    "id":3,
    "name":"Multiplication Game",
    "img":"https://www.sourcecodester.com/sites/default/files/images/rems/qm_1.png",
    "lang":"HTML - CSS - Javascript",
    "about":"Multiplication Game is a fun and challenging game where players have to solve math problems within a time limit to earn points",
    "link":"https://github.com/Niviss/Reactcode/tree/main/multiplication%20game",
    "demo":"https://onecompiler.com/html/42kg7ay5k"
},
{
  "id":4,
  "name":"Stopwatch",
  "img":"https://codingartistweb.com/wp-content/uploads/2023/04/Stopwatch-new-01.png",
   "lang":"HTML - CSS - Javascript",
   "about":"A stop watch is a timepiece designed to measure the amount of time that elapses between its activation and deactivation. A digital stopwatch sped-up stopwatch animation.",
  "link":"https://github.com/Niviss/Reactcode/tree/main/stopwatch",
  "demo":"https://onecompiler.com/html/42kg8dxej"
},
{
  "id":5,
  "name":"Light-Dark mode",
  "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvRaN6Bey-JxX1p-yMaGvBVAbJh6OAJowhw&s",
  "lang":"HTML - CSS - Javascript",
  "about":"To toggle between the light and dark modes in a web page, we need to add a switch button to it. Dark mode advocates argue that it's easier on the eyes and can contribute to better sleep patterns by reducing exposure to blue light",
  "link":"https://github.com/Niviss/Reactcode/tree/main/Light-Dark%20mode",
  "demo":"https://onecompiler.com/html/42ksrdjec"
},
{
  "id":6,
  "name":"car model",
  "img":"https://codingtorque.com/wp-content/uploads/2023/04/1-18.png",
  "lang":"HTML - CSS - Javascript",
  "about":"A simple car design using CSS. Moves in a horizontal motion",
  "link":"https://github.com/Niviss/Reactcode/tree/main/car%20model",
  "demo":"https://onecompiler.com/html/42ksmsy3q"
}
 ]
  return (
    <div data-theme={data===1?"Dark":"Light"} id="Project-Page" className='PP'>
      <div className='heading'>
        <h1>PROJECTS</h1>
      </div>
      <div className='pro-container'>
        <ol className=' slider'>
          {datas.map((datas)=>{
          return( <li  key={datas.id}><img className="projects-img" alt={datas.name} src={datas.img}/>
          <div className='pcard-body'>
            <h3>{datas.name}</h3>
            <h5>{datas.lang}</h5>
            <p>{datas.about}</p>
            <div className='buttons-proj'>
            <button><a href={datas.link} target='blank'>Code</a></button>
            <button><a href={datas.demo} target='blank'>Demo</a></button>
            </div>
          </div>
          </li>)
          })}
        </ol>
      </div>
    </div>
  )
}

export default Project