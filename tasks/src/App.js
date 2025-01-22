import Task1 from './component/task1'
import Task2 from './component/task2'
import Task3 from './component/task3'
import Task4 from './component/task4'
import Task5 from'./component/task5'
import Task6 from './component/task6'
import Task7 from './component/task7'
import Task8 from './component/task8'
import Task9 from './component/task9'
import Task10 from './component/task10'
import Task11 from './component/task11'



function App() {
  const Task7Click = () => {
    alert('Task7 button clicked!');
  };
  return (
    <div className="App"><hr />
     <Task1 name="Saba"  /><hr />
      <Task2  label="Click Me"  /><hr />
     <Task3  PN="labtob" price="$999" description="A powerful laptop for work and play." /><hr /> 
     <Task4  username="saba" email="saba@gmail.com" age="25" /><hr />
     <Task5  avatar={<img src= {image} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>}
     name="amro" email="amro@orange.com" /> <hr />
    
    <Task6  hLink="Home" aLink="About" ctLink="Contant"/> <hr />

    
     <Task7 label="Click Me" onClick={Task7Click} /> <hr /> 
<Task8/><hr/>
<Task9/> <hr/>
<Task10/> <hr/>
<Task11/> <hr/>

    </div>
  );
}

export default App;