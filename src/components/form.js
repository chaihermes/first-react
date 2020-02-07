import React from 'react'

export default class Form extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            coisa:
        }
    } 

    lidarComClick(e){
        this.props.onFormClick(this.state.coisa);
    }

    render() {
        return (
            <form className="card">
                <div className="card-header">
                    <h2 className="card-title"> Formulário</h2>
                </div>
                <p className="form-group">
                    <label className="form-label">Nome</label><br />
                    <input className="form-control" type="text" />
                </p>
                <p className="form-group">
                    <label className="form-label">GitHub</label><br />
                    <input className="form-control" type="url" />
                </p>
                <p className="card-footer text-right">
                    <button className="btn btn-primary" onClick={this.lidarComClick}>Enviar</button>
                </p>

            </form> 
        )
    }
}