import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import './App.css';
import Card from './components/cards/Card';
import ImageForCard from "./components/cards/ImageForCard";
import YandexPage from './components/decomposition/YandexPage';
import Collapse from './components/Collapse/Collapse';

const card1 = {
  title: 'Заголовок 1',
  text: 'Текст первой карточки',
  button: 'Кнопка 1'
}

const card2 = {
  title: 'Заголовок 2',
  text: 'Текст второй карточки',
  button: 'Кнопка 2'
}

const img = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zzFbSfGJXdMfkCxbwadZ_QX0s9J7UIBKWvn722hy8uaoQlxJ9BRpt-ZR_QHXSSINcII&usqp=CAU',
  alt: 'Картинка'
}
const CardComponent = () => {
  return(
    <>
      <Card props={ card1 }></Card>
      <Card props={ card2 }>
        <ImageForCard src={ img.src } alt={ img.alt } />
      </Card>
    </>    
  )
}

const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque non voluptatum adipisci? Labore, quae. Delectus voluptas ipsam voluptatum. Impedit hic dolorem ad eligendi nobis voluptatum deserunt similique officia sequi!';

function App() {
  let [ curTask, setCurTask ] = useState('COLLAPSE');
  const tasks = [
    { taskName: 'CARD', solving: <CardComponent key={'CARD'} />},
    { taskName: 'YANDEX', solving: <YandexPage key={'YANDEX'} />},
    { taskName: 'COLLAPSE', solving: <Collapse expandedLabel={text} collapsedLabel='Кнопка' key={'COLLAPSE'} />}
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App;
