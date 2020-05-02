import React, {Component, Fragment} from 'react';
import '../../App.css';

export default class Tarefa extends Component{
    constructor(){
        super();
        this.state={
            tarefa: "",
            tarefas : ['tarefa 1', 'tarefa 2','tarefa 3']
        };

        this.handleChange = this.handleChange.bind(this);
        this.AddTarefa = this.AddTarefa.bind(this);
    }

    render(){
        return(
            <Fragment>
                <h1 className="header center orange-text">
                To-Do List
                </h1>
                <input onChange={this.handleChange} value={this.state.tarefa}/>
                <button onClick={this.AddTarefa}>Adicionar</button>
                <ul>
                    <h1 className="header center black-text"> 
                    {this.state.tarefas.map(tarefa => <li>{tarefa}</li>)}
                    </h1>
                </ul>
                

            </Fragment>
        );
    }
    AddTarefa(){
        this.setState({
            tarefa:"",
            tarefas:[].concat(this.state.tarefas , this.state.tarefa)});
    }
    handleChange(event){
        this.setState({tarefa:event.target.value});
    }
}