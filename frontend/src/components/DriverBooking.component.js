import React,{Component} from 'react';

export default class DriverBooking extends Component {
    componentDidMount() {
        fetch('/driverbooking')
          .then(res => res.text())
          .then(res => this.setState({message: res}));
      }
    render(){
        return(
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div>Welcome to Driver Login</div>
                </div>
        )
    }
}