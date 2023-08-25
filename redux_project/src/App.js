
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Title from './components/Title';

function App() {
  return (
    <div>

      <Title />

  <div class="row justify-content md-center">
    <div class="col lg-6">
      <AddTask />
      <TaskList />
      

      </div>
      </div>

      
    </div>
  );
}

export default App;
