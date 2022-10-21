import React, {Component, Fragment} from 'react'
import './FormArtigo.css'

export default class FormArtigo extends Component{

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      artigos: [''],
      roles: ['']

    }    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render() {
    const { nome,  } = this.state
    return (
      <Fragment>
        <main onSubmit={this.handleSubmit}>
          <form>
            <label>{nome}</label>
          </form>
        </main>
      </Fragment>
    )
  }
}
