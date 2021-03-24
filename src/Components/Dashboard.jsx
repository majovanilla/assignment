import React from 'react';
import Fail from './Fail';
import Deployment from './Deployment';
import Lead from './Lead';
import Restore from './Restore';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
      failure: 0,
      success: 0,
      aborted: 0,
      isLoaded: false
    }
  }

  filterData(data) {
    data.map(item => {
      if (item.result === 'SUCCESS') {
        this.setState({success: this.state.success +1 });
      } else if (item.result === 'FAILURE') {
        this.setState({failure: this.state.failure +1 });
      } else if (item.result === 'ABORTED') {
        this.setState({failure: this.state.aborted +1 });
      }
    });
  }

  componentDidMount() {
    fetch("https://cdn.glitch.com/760886e0-5f1f-4216-9a2e-0e0c7c7797eb%2Fbuilds.json?v=1602261849911")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .then(() => {
        this.filterData(this.state.data);
      })
  }



  render() {
    let {failure, success, aborted} = this.state;
    let total = this.state.data.length - 1; 

    return (
      <div className='dashboard'>
        <Fail data={(failure*100)/total} />
        <Lead />
        <Restore />
        <Deployment />
      </div>
    );
  }
}