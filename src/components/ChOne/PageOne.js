import React, {Component} from 'react'

class PageOne extends Component{
    constructor(){
        super();
        this.state={
            charName:'',
            shipName: ''
        }
    }

    getName = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    assignName = () =>{
        this.setState({charName:this.state.name})
    }

    assignShipName = () =>{
        this.setState({shipName:this.state.ship})
    }

    render(){
        console.log(this.state.charName)
        const {charName, shipName} = this.state
        return(
            <div>
                <h1>It all starts here...</h1>
                <p>Enter your name:</p>
                <input type='text' name='name' onChange={this.getName}/>
                <button onClick={()=>this.assignName()}>Begin your adventure</button>
                {charName ? 
                    <div>
                        <p>Hello, {charName}.</p>
                        <p>Welcome to Stranded - a choose your own adventure game built in React.</p>
                        <p>Before we begin, perhaps you should name your ship. It is your pride and joy afterall...</p>
                        <input type='text' name='ship' onChange={this.getName}/>
                        <button onClick={()=>this.assignShipName()}>Name Your Ship</button>
                    </div> : null}
                {charName && shipName ? 
                    <div>
                        <p>{shipName}? Interesting... but I like it!</p>
                    </div> : null}
            </div>
        )
    }
}

export default PageOne