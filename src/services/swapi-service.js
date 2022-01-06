export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/'

    async getData(url){
        const res = await fetch(this._apiBase+url);
        if(!res.ok){
            throw new Error ('чёт не получилось '+res.status)
        }
        return await res.json();
      }
//подтягивает данные имея часть напечатанного урла с возможностью подстановки части урла и возвращает в случае успеха результат джейсон
      getAllPeople= async ()=>{
          const res = await this.getData('people/');
          return res.results.map(this._transformPerson)
      }
       getAllPlanets= async ()=>{
        const res = await this.getData('planets/');
        return res.results.map(this._transformPlanet)
    }
    //передает для каждой планеты свои характеристики
      getPerson= async (id)=>{
          const person = await this.getData('people/'+id);
          return this._transformPerson(person)
      }
       getPlanet= async (id)=>{
        const planet = await this.getData('planets/'+id);
        return this._transformPlanet(planet);
    }
     getAllShips= async ()=>{
        const res = await this.getData('starships/');
        return res.results.map(this._transformStarShip)
    }
      getShip=async (id)=>{
        const ship = await this.getData('starships/'+id)
        return this._transformStarShip(ship)
      }
      _extractId=(item)=>{
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id  
      }
      //вычленяет из адресной строки айди будьто корабль планета или персонаж
      

      getPersonImage =(id)=>{
       return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getShipImage =(id)=>{
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
   }

   getPlanetImage =(id)=>{
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
 }


      _transformPlanet=(planet)=>{
          
          return{
            id:this._extractId(planet),
            name:planet.name,
            population:planet.population,
            rotationPeriod:planet.rotation_period,
            diameter:planet.diameter,
            
          }

      }
      // показывает характеристики нужной планеты
      _transformStarShip=(ship)=>{
          return{
            id:this._extractId(ship),
            name:ship.name,
            model:ship.model,
            manufacturer:ship.manufacturer,
            costInCredits:ship.costInCredits,
            length:ship.length,
            crew:ship.crew,
            passengers:ship.passengers,
            cargoCapacity:ship.cargoCapacity,
          }
      }

      _transformPerson=(person)=>{
          
        return{
          name:person.name,
          gender:person.gender,
          birthYear:person.birth_year,
          eyeColor:person.eye_color,
          id:this._extractId(person)
        }
    }
    getRandomId=()=>{
      return Math.floor(1+Math.random()*(20+1-1))
    }
}


