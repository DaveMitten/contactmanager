import React, { Component } from 'react'

class Test extends Component {
  state= {
    test: 'test'
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidUpdate(){
    console.log('component updated');
  }
componentWillReceiveProps(nextProps, nextState){
  console.log('componenent will receive props')

}

getSnapshotBeforeUpdate(prevProps, prevState){

}

static getDerivedStateFromProps(nextProps, nextState){
  console.log('getDerivedStateFromProps')
  this.setState();

}

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
 

export default Test;