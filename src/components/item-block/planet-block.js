import React from "react";
import {BlockItemText} from '../item-details/item-details';
import {PlanetList,PlanetDetails} from '../sw-components/index';
import { useState } from "react";
import { useParams,Route,Routes} from "react-router-dom";
import ErrorCompon from "../error-view/error-view";


// import withItemId from "../hoc-helpers/with-item-id";


// export default class PlanetBlock extends React.Component{
//     state={
//         planetId:null,
//     };
//     idSelectPlanet=(id)=>{

//         this.setState({planetId:id});
//     }
    
//     render(){
      
//         const BlockPlanetDetails = ({...props})=>{
//             // console.log({...props});
//             return(
//                 <PlanetDetails {...props}>
//                     <BlockItemText field='name' label='имя'/>
//                 </PlanetDetails>
                        
//                 )}
//         //const WithItemIdBlock=withItemId(BlockPlanetDetails,this.state.planetId)
        

//         return(
//             <div className='d-flex justify-content-between'>
//                 <ErrorCompon>
//                     <PlanetList idSelect={this.idSelectPlanet} /*planetId={this.state.planetId}*//>
//                     {/* <Link to={`planet/${this.state.planetId}`}></Link> */}
//                 </ErrorCompon>
                
//                     <ErrorCompon>
                    
//                         {withItemId(BlockPlanetDetails,this.state.planetId)}
                        
//                     </ErrorCompon>
                
            
//         </div>
        
//         )
//     }
// }

const PlanetBlock =()=>{
    const [planetId,setPlanetId]=useState(null);
    
    
    const idSelectPlanet=(id)=>{
                            setPlanetId(id)
                         }
    return(
            <div className='d-flex justify-content-between'>
                <ErrorCompon>
                    <PlanetList idSelect={idSelectPlanet} />
                </ErrorCompon>
            
                
                
                    <ErrorCompon>
                        <Routes>
                            <Route path={"details/:id"} element={
                            <PlanetDetails selectedItem={planetId}>
                                <BlockItemText field='name' label='имя'/>
                            </PlanetDetails>}/>
                        
                        </Routes>
                    </ErrorCompon>
                    
            
            </div>
    )
};


export default PlanetBlock;