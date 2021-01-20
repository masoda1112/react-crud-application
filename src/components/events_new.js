import React, {Component} from 'react';
import {connect} from 'react-redux'
// import {postEvent} from '../actions'
import {Link} from 'react-router-dom'
import {Field,reduxForm, touch} from 'redux-form'
import {postEvent} from '../actions'

class EventsNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field){
    const {input,label,type,meta: { touched,error } } = field
    return (
    <div>
      <input {...input} placeholder={label}></input>
      {touched && error && <span>{error}</span>}
    </div>)
  }
  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }
  render(){
    const {handleSubmit} = this.props
    return(
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField}/></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField}/></div>
          <div>
            <input type="submit" value="Submit" disabled={false}/>
            <Link to="/">cancel</Link>
          </div>
        </form>
      </>
    )
  }
}
// ここのコードでstoreにアクセスしているらしいが、ちょっとよくわかっていないので必要な時に調べる
const mapStateToProps = state =>({events: state.events});
const validate = values=> {
  const errors = {}
  if(!values.title) errors.title = "Enter a title please."
  if(!values.body) errors.body = "Enter a body please."
  return errors
}
const mapDispatchProps = ({postEvent})
export default connect(null, mapDispatchProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
