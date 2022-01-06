import React from "react";
import './random-planet.css';


import Loader from "../loader/loader";
import ErrorView from "../error-view/error-view";

export default class RandomPlanet extends React.Component{

    static defaultProps={
        interval:2000
    }

    state={
        planet:{},
        randomPlanet:false,
        loading:true,
        error:false
    };
   
    onError=(err)=>{this.setState({error:true})}

    onPlanedLoaded = (planet)=>{
        this.setState({planet,loading:false})
        
    }

    stateRandom=()=>{
        this.setState({randomPlanet:!this.state.randomPlanet})  ////дергаем состояние в тру
      };
     

    updatePlanet=()=>{
        const id=this.props.swapiServis.getRandomId()
        this.props.swapiServis.getPlanet(id)
       
        .then(this.onPlanedLoaded)
        .catch(this.onError)
        
    }
    itervalUpdateRandomPlanet(){
        
        this.intId=setInterval(this.updatePlanet, this.props.interval) //должна запускаться чтобы если стэйтрандом тру дергала апдэйтпланет который меняет рандомно айдишки 
        if(!this.state.randomPlanet){ clearInterval(this.intId)}
    }
    componentDidMount(){
        this.updatePlanet();
    }
    componentDidUpdate(prevP,prevS){
        if(this.props.swapiServis!==prevP.swapiServis){this.updatePlanet()}
        else if (this.state.randomPlanet!==prevS.randomPlanet) { this.itervalUpdateRandomPlanet()}
        
    }
    
   render(){ 
       const{planet,loading,error}=this.state;
       let content = !loading ?<PlanetView planet={planet} getImage={this.props.swapiServis.getPlanetImage}/>:<Loader/>
       if(error){
        content = <ErrorView/>   //////не хорошо! переделать
       }
       return(
        <React.Fragment>   
        <div className="random-planet d-flex">
            {content}
            
        </div>
        <button onClick={this.stateRandom} className="btn btn-lg btn-primary">Переключатель рандома планет</button>
        </React.Fragment> 
        )
    }
};

class PlanetView extends React.Component {

                                                                                //обратить внимание и сделать сэтинтервал только после загрузки изображения
    // componentDidMount(){
    //     const img = document.getElementsByTagName('img');
    //     img[0].onload=function () {

    //         console.log('img done');
            
    //     }
    // }

    render(){

    const {name,population,rotationPeriod,diameter,id}=this.props.planet;
    const imgSource = this.props.getImage(id)
    
    
        return (
            <React.Fragment >
                <img src={imgSource} alt={name}/> 
                <div className='random-planet__discription d-flex'>
                    <h3>Планета {name}</h3>
                    <p>Население {population} особ.</p>
                    <p>в году {rotationPeriod} мес.</p>
                    <p>диаметр {diameter} км</p>
                </div>
            </React.Fragment>
        );
    }
};

