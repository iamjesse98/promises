import React, { Component } from 'react'
import './App.css'
import * as bible from 'holy-bible'

//bible.get('Jn 15:13', 'ASV').then(function (res) {console.log(res.text)})
class BibleSearch extends Component {
  constructor() {
  	super()
  	this.state = {
  		verse: ''
  	}
  }
  show() {
  	bible.get(document.querySelector('#search').value, 'ASV').then(res => {
  		this.setState({
  			verse: res.text
  		})
  	})
  }
  render() {
    return (
      <div>
	<input type="text" id="search"/>
	<button onClick={this.show.bind(this)}>GET</button>
	<blockquote>
		{this.state.verse}
	</blockquote>
      </div>
    )
  }
}

export default BibleSearch
