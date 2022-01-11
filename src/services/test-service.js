

export default class TestService {  

    

    _people = [
      {
        id: 1,
        name:'Bilbo Baggins [TEST DATA]',
        gender:'male',
        birthYear:'long ago',
        eyeColor:'dark brown'
      },{
        id: 2,
        name:'Frodo Baggins [TEST DATA]',
        gender:'male',
        birthYear:'long ago',
        eyeColor:'dark brown'
      },{
        id: 3,
        name:'Pilpo gurd [TEST DATA]',
        gender:'remale',
        birthYear:'fgh ago',
        eyeColor:'dark '
      }
    ];
  
    _planets = [
      {
        id: 1,
        name:'Earth [TEST DATA]',
        population:'7.530.000.000',
        rotationPeriod:'23 hours 56 seconds',
        diameter:'12.742 km'
      },{
        id: 2,
        name:'Venus [TEST DATA]',
        population:'not known',
        rotationPeriod:'243 days',
        diameter:'12.104 km'
      },{
        id: 3,
        name:'Ribay [TEST DATA]',
        population:'43534545345345',
        rotationPeriod:'233 days',
        diameter:'16.104 km'
      }
    ];
  
    _starships = [
      {
        id: 1,
        name:'USS Enterprise [TEST DATA]',
        model:'NCC-1701-C',
        manufacturer:'Northrop Grumman Shipbuilding',
        costInCredits: 'not known',
        length: 'approx 300 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100
      },
      {
        id: 2,
        name: 'nouhadanosar [TEST DATA]',
        model: 'rty345',
        manufacturer: 'Zion5',
        costInCredits: 'unpurchse',
        length: 'approx 500 meters',
        crew: 25,
        passengers: 10,
        cargoCapacity: 180
      },
      {
        id: 3,
        name: 'Zhiguli [TEST DATA]',
        model: 'vaz 2101',
        manufacturer: 'ZhiGulManufact',
        costInCredits: '1000',
        length: 'approx 4 meters',
        crew: 2,
        passengers: 3,
        cargoCapacity: 500
      }
      
    ];

//подтягивает данные имея часть напечатанного урла с возможностью подстановки части урла и возвращает в случае успеха результат джейсон
      getAllPeople= async ()=>{
          const res = this._people;
        return res.map(this._transformPerson);
      }
       getAllPlanets= async ()=>{
        const res = this._planets;
        return res.map(this._transformPlanet)
    }
    //передает для каждой планеты свои характеристики
      getPerson= async (id)=>{
          const person = this._people.filter(item=>item.id==id);
          return this._transformPerson(...person)
      }
       getPlanet= async (id)=>{
        const planet = this._planets.filter(item=>item.id==id);
        return this._transformPlanet(...planet);
    }
     getAllShips= async ()=>{
        const res = this._starships;
        return res.map(this._transformStarShip)
    }
      getShip=async (id)=>{
        const ship = this._starships.filter(item=>item.id==id);
        return this._transformStarShip(...ship)
      }
      _extractId=(item)=>{
        
        return item.id  
      }
      //вычленяет из адресной строки айди будьто корабль планета или персонаж
      

      getPersonImage =(id)=>{
       return `https://placeimg.com/400/400/people/${id}.jpg`
    }

    getShipImage =(id)=>{
      return `https://placeimg.com/400/400/arch/${id}.jpg`
   }

   getPlanetImage =(id)=>{
    return `https://placeimg.com/400/400/nature/${id}.jpg`
 }


      _transformPlanet=(planet)=>{
          
          return{
            id:this._extractId(planet),
            name:planet.name,
            population:planet.population,
            rotationPeriod:planet.rotationPeriod,
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
            
          }
      }

      _transformPerson=(person)=>{
        
        return{
          name:person.name,
          gender:person.gender,
          birthYear:person.birthYear,
          eyeColor:person.eyeColor,
          id:this._extractId(person),
          
        }
    }

    getRandomId=()=>{
      return Math.floor(1+Math.random()*(this._planets.length+1-1))
    }
   
}

