import React,{Component} from 'react';
import Map from '../Map';
// import GoogleApiWrapper from './googleapiwrapper.component';


export default class Booking extends Component {
    componentDidMount() {
        fetch('/api/booking')
          .then(res => res.text())
          .then(res => this.setState({message: res}));
      }
    
    render(){
        return(
            <div>
                <br/><br/><br/><br/>
                
                <div>
               {/* <form>
                   <label for="destination"><b>Where To??</b></label>
                   <input type="text" className="form-control" placeholder="Enter your Destination"></input>
               </form> */}
               </div>
               <Map
     google={this.props.google}
     center={{lat: 18.5204, lng: 73.8567}}
     height='300px'
     zoom={15}
    />
            </div>
        )
    }
}