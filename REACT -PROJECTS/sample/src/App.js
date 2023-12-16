import './App.css';
import NameList from './components/task1/NameList';
import Counter from './components/task2/Counter';
import TodoList from './components/task3/TodoList';
import ListWithCheck from './components/task4/ListWithCheck';
import MultiLevelDropDown from './components/task5/MultiLevelDropDown';
import ImageSearch from './components/task6/ImageSearch';
import MultiInuput from './components/task7/MultiInuput';

function App() {
  return (
    <div className="App">
    <NameList/>
    <Counter/>
    <TodoList/>
    <ListWithCheck/>
    <MultiLevelDropDown/>
     <ImageSearch/>
     <MultiInuput/>
    </div>
  );
}

export default App;
