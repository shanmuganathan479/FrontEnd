import React,{Component} from 'react'

class PropsWithClassComp extends Component{
    render(){
        return(
            <div>
                <h1>ClassComp with props</h1>
                <h2>My fav lap is {this.props.lap}</h2>
            </div>
        )
    }
}

export default PropsWithClassComp