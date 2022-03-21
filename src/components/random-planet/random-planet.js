import React from "react";
import "./random-planet.css";
import Loader from "../loader/loader";
import ErrorView from "../error-view/error-view";

export default class RandomPlanet extends React.Component {
  static defaultProps = {
    interval: 2000,
  };

  state = {
    planet: {},
    randomPlanet: false,
    loading: true,
    error: false,
  };

  onError = (err) => this.setState({ error: true });

  onPlanedLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  stateRandom = () => {
    this.setState({ randomPlanet: !this.state.randomPlanet }); ////дергаем состояние в тру
  };

  updatePlanet = () => {
    const id = this.props.swapiServis.getRandomId();
    this.props.swapiServis
      .getPlanet(id)
      .then(this.onPlanedLoaded)
      .catch(this.onError);
  };
  itervalUpdateRandomPlanet() {
    if (this.state.randomPlanet) {
      this.intId = setInterval(this.updatePlanet, this.props.interval);
    } //должна запускаться чтобы если стэйтрандом тру дергала апдэйтпланет который меняет рандомно айдишки
    if (!this.state.randomPlanet) {
      clearInterval(this.intId);
    }
  }
  componentDidMount() {
    this.updatePlanet();
  }
  componentDidUpdate(prevP, prevS) {
    if (this.props.swapiServis !== prevP.swapiServis) {
      this.updatePlanet();
    }
    if (this.state.randomPlanet !== prevS.randomPlanet) {
      this.itervalUpdateRandomPlanet();
    }
  }
  componentWillUnmount() {
    // this.props.swapiServis.onAbort()
  }

  render() {
    const { planet, loading, error } = this.state;
    let content = !loading ? (
      <PlanetView
        planet={planet}
        getImage={this.props.swapiServis.getPlanetImage}
      />
    ) : (
      <div className="mokkaloader">
        <Loader />
      </div>
    );
    if (error) {
      content = <ErrorView />;
    }
    return (
      <React.Fragment>
        <div className="random-planet ">{content}</div>
        <button
          onClick={this.stateRandom}
          className="random-btn btn btn-lg btn-primary"
        >
          Переключатель рандома планет
        </button>
      </React.Fragment>
    );
  }
}

class PlanetView extends React.Component {
  state = {
    loading: false,
  };
  refImg = React.createRef();
  componentDidMount() {
    this.refImg.current.onload = () => {
      this.setState({ loading: true });
    };
  }

  render() {
    const { name, population, rotationPeriod, diameter, id } =
      this.props.planet;
    const imgSource = this.props.getImage(id);
    const styleVisible = this.state.loading
      ? { display: "block" }
      : { display: "none" };
    const { loading } = this.state;
    return (
      <div className="d-flex">
        <img
          src={imgSource}
          alt={name}
          ref={this.refImg}
          style={styleVisible}
        />
        {!loading && (
          <div className="mokkaloader">
            <Loader className="mokkaloader" />
          </div>
        )}
        <div className="random-planet__discription d-flex">
          <h3>Планета {loading ? name : "..."}</h3>
          <p>Население {loading ? population : "..."} особ.</p>
          <p>в году {loading ? rotationPeriod : "..."} мес.</p>
          <p>диаметр {loading ? diameter : "..."} км</p>
        </div>
      </div>
    );
  }
}
