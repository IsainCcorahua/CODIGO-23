import './App.css'
import style from "./Header.module.scss";
import { Card } from './components/card/Card'
import { Search } from './components/search/Search';

const jobs =[
  {
    id: 1,
    title: "Frontend developer",
    company: {
      name: "Google",
      logo: "/google.png",
    },
    location: {
      city: "Australia",
      logo: "/australia.png",
    },
    salary: ""
  }
]

function App() {

  return (
    <>
    <div className={style.jobs_list}>
    {[1 ,2 , 3, 4].map((item, index) =>(
      <Card key={index}/>
    ))}
    </div>
    </>
  )
}

export default App
