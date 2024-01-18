import { useEffect } from "react"
import useFetch from "../hooks/UseFetch"


import "./styles/PlanetsCard.css"
import { useSelector } from "react-redux"




const PlanetsCar = () => {

  const url= useSelector(states=>states.url)
  

 

  console.log('url url url ');
  console.log(url)

  const [planets, getPlanets, errorPlanets] = useFetch(url)
  

  useEffect(() => {
    getPlanets();

  }, [])

  console.log(planets);

 // const planets= useSelector(states=>states.planets)



  return (
    <article className="planet__card">

      <img className="img__planet__card" src={planets?.items[0].image} alt='' />


      <ul className="info__planet__card">
        <li>
          <span className=" planet__info__label">Name:</span>
          <span className="planet__info__value"> {planets?.items[0].name}</span>
        </li>
        <li><span className=" planet__info__label">Description:</span> <span className="planet__info__value"> {planets?.items[0].description}</span></li>
        <li><span className=" planet__info__label|">Is Destroyed:</span> <span className="planet__info__value"> {planets?.items[0].isDestroyed ? 'True' : 'False'}</span></li>
      </ul>
    </article>
  )
}

export default PlanetsCar