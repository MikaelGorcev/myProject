export default class TestService {
  idTime;
  onAbort = () => {
    clearTimeout(this.idTime);
  };
  _people = [
    {
      id: "1",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "2",
      name: "name 2 [TEST DATA]",
      gender: "gender 2 test",
      birthYear: "date 2 test",
      eyeColor: "color 2 test",
    },
    {
      id: "3",
      name: "name 3 [TEST DATA]",
      gender: "gender 3 test",
      birthYear: "date 3 test",
      eyeColor: "color 3 test",
    },
    {
      id: "4",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "5",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "6",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "7",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "8",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "9",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "10",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
    {
      id: "11",
      name: "name 1 [TEST DATA]",
      gender: "gender 1 test",
      birthYear: "date 1 test",
      eyeColor: "color 1 test",
    },
  ];

  _planets = [
    {
      id: "1",
      name: "planet name 1 [TEST DATA]",
      population: "population test 1",
      rotationPeriod: "period test 1",
      diameter: "test km 1",
    },
    {
      id: "2",
      name: "planet name 2 [TEST DATA]",
      population: "population test 2",
      rotationPeriod: "period test 2",
      diameter: "test km 2",
    },
    {
      id: "3",
      name: "planet name 3 [TEST DATA]",
      population: "population test 3",
      rotationPeriod: "period test 3",
      diameter: "test km 3",
    },
  ];

  _starships = [
    {
      id: "1",
      name: "starships name 1 [TEST DATA]",
      model: "test NCC-1701-C",
      manufacturer: "test Shipbuilding",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
    },
    {
      id: "2",
      name: "starships name 2 [TEST DATA]",
      model: "test rty345",
      manufacturer: "test Zion5",
      length: "approx 500 meters",
      crew: 25,
      passengers: 10,
    },
    {
      id: "3",
      name: "starships name 3 [TEST DATA]",
      model: " test vaz 2101",
      manufacturer: "test ZhiGulManufact",
      length: "approx 4 meters",
      crew: 2,
      passengers: 3,
    },
  ];

  getSetAsyncDataWithDelay = (list, transformList, delay) => {
    return new Promise(
      (resolve) =>
        (this.idTime = setTimeout(() => {
          const res = list;
          return resolve(res.map(transformList));
        }, delay))
    );
  };
  getItemAsyncDataWithDelay = (id, item, transformItem) => {
    return new Promise(
      (resolve) =>
        (this.idTime = setTimeout(() => {
          const res = item.filter((item) => item.id == id);
          return resolve(transformItem(...res));
        }, 2000))
    );
  };

  test = async (list, transformList) => {
    const res = list;
    return res.map(transformList);
  };
  test2 = async (id, item, transformItem) => {
    const res = item.filter((item) => item.id == id);
    return transformItem(...res);
  };

  //подтягивает данные имея часть напечатанного урла с возможностью подстановки части урла и возвращает в случае успеха результат джейсон
  getAllPeople = () =>
    this.getSetAsyncDataWithDelay(this._people, this._transformPerson, 2000);
  getAllPlanets = () =>
    this.getSetAsyncDataWithDelay(this._planets, this._transformPlanet, 2000);

  getAllShips = () =>
    this.getSetAsyncDataWithDelay(
      this._starships,
      this._transformStarShip,
      2000
    );

  getPerson = (id) =>
    this.getItemAsyncDataWithDelay(id, this._people, this._transformPerson);

  getPlanet = (id) =>
    this.getItemAsyncDataWithDelay(id, this._planets, this._transformPlanet);

  getShip = (id) =>
    this.getItemAsyncDataWithDelay(
      id,
      this._starships,
      this._transformStarShip
    );

  _extractId = (item) => {
    return item.id;
  };
  //вычленяет из адресной строки айди будьто корабль планета или персонаж

  getPersonImage = (id) => {
    return `https://placeimg.com/400/400/people/${id}.jpg`;
  };

  getShipImage = (id) => {
    return `https://placeimg.com/400/400/arch/${id}.jpg`;
  };

  getPlanetImage = (id) => {
    return `https://placeimg.com/400/400/nature/${id}.jpg`;
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotationPeriod,
      diameter: planet.diameter,
    };
  };
  _transformStarShip = (ship) => {
    return {
      id: this._extractId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  };

  getRandomId = () => {
    return Math.floor(1 + Math.random() * (this._planets.length + 1 - 1));
  };
}
