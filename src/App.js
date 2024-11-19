import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "./TasksContext.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}

export default App;
