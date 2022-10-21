import React, {Component, Fragment, useEffect} from 'react'
import axios from '../api/axios';
import styles from './home.module.css';

export default class Home extends Component {  

  constructor(props){

    super(props)
    
    this.state = {
      usuarios: props.usuarios,
      usuario: {
        id: 1,
        nome: 'Mauro Silva',
        permissoes: {
          perfis: ['Advogado', 'Juiz', 'Policial Federal'],
          paginas: [
            { 
              endereco: 'projetos/lista-testadores',
              papeis: {
                read: true,
                delete: false,
                update: false,
                create: false
              }
            },        
          ]
        }
      }
    }
  } 

  componentDidMount(){   

    try{
     axios.get('http://localhost:8080/api/usuarios',
        {
            headers: { 
              'Content-Type': 'application/json', 
              'Accept-Origin': '*'},
            withCredentials: false

        }
      ).then( (response) => {
        this.setState({usuarios: response.data })
      })
      
    }catch(err){
      console.log(`Erro ao recuperar usuarios ${err.message}` )
    }
  }

  renderList(){
    if(!Array.isArray(this.state.usuarios) ){
      return ''
    }
    return this.state.usuarios.map( (usuario) => {
      return <option value={usuario.id} >{usuario.nome}</option>
    } )
  }

  imprimeSelect(e){
    e.preventDefault();
    const usuarioSelecionado = e.target.selectedOptions[0].value        
    if(usuarioSelecionado){
      this.setState({
        usuario: this.state.usuarios.find(usuario => {
          console.log(`${usuario.id} comparado à ${usuarioSelecionado}`) 
          return Number.parseInt(usuario.id) === Number.parseInt(usuarioSelecionado)
        })
      })
    }
   
  }

  render( ) {

    function Perfis(props) {
      return <ul className={styles.perfis}>
        { props.perfis.map( (perfil) => 
        {
          console.log(perfil)
        return <li className={styles.defaultBread} key={perfil}>{perfil} </li>} ) }
      </ul>
    }
    function Papeis(props){
      const papeis = props.papeis;
      return <ul>
            { papeis.create ? <li className={styles.blueBread}>Create</li> : null }
            { papeis.read ?<li className={styles.purpleBread}>Read</li> : null }
            { papeis.update ? <li className={styles.violetBread}>Update</li> : null }
            { papeis.delete ? <li className={styles.wineBread}>Delte</li> : null }
        </ul>
    }
    function Usuario(props){
      return <>
        {
          (props.usuario.permissoes.perfis ? 
            <Perfis perfis={props.usuario.permissoes.perfis}/> 
            : null)
        }
        { props.usuario.permissoes.paginas.map( 
          (pagina) =>  <>
              <div className={styles.pagina_endereco}>{pagina.endereco}</div>
              { pagina.papeis ? <Papeis papeis={pagina.papeis}/> : null}
            </>
          )
        }
        <span className={styles.usuarioDetalhesNome}>{props.usuario.nome}</span>
        <pre className={styles.usuarioDetalhesJson}>{JSON.stringify(props.usuario.permissoes, undefined, 2)}</pre>            
      </>
      
    }

    return <Fragment>
      <div className={styles.conteudo}>
        <div className={styles.seletorUsuarios}>          
          <select defaultValue={this.state.usuario}
            onChange={ e => this.imprimeSelect(e)}>
            {this.renderList()}
          </select>          
        </div>
        <div className={styles.usuarioDetalhes}>     
          <Usuario usuario={this.state.usuario}/>
        </div>
      </div>
    </Fragment>
      
      
    
  }
}