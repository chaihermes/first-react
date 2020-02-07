import React, { Component } from 'react';
//aqui também pode ser import React from 'react'
import App from './app';


export default class TableProfissionais extends Component {
    //também pode ser export default class TabelProfissionais extends React.Component {}
    
    render() {
        //console.log("PROPS:", this.props);
        return ( //aqui usa parênteses para inserir HTML (padrão para não dar problema em casos específicos, mas poderia ser sem 
        <div>    
            <h2>Eu sou uma tabela</h2>
        

        <table className="table mt-5 mb-5"> 
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>GitHub</th>
                </tr>
            </thead>
            <tbody>

                {this.props.dados.map((profissional) => {
                    return (
                        <tr key={profissional.id}>
                            <td>{profissional.nome}</td>
                            <td>{profissional.github}</td>
                        </tr>
                    )
                } )}
                
            </tbody>
        </table>
        </div>
            
        
        )
    }
}

; //exporta para poder usar em outros lugares do sistema
//o map funciona como um foreach, para cada profissional, ele retorna um HTML com os dados dos profissionais que estão em app.js
//dentro do foreach, o key é usado para melhorar a performance. A Key deve ser usada dentro de um container.