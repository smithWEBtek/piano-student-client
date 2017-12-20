import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Resource from './Resource/Resource';
import ResourceService from './ResourceService';
import classes from './Resources.css';
import Aux from '../../hoc/Aux/Aux';

class Resources extends Component {
  state = {
    resources: this.props.resources,
    resourceInfo: null
  }

  render() {
    const showResource = (id) => {
      ResourceService.fetchResource(id)
      .then(response => this.setState({resourceInfo: response}));
    };
      
    const resourcesList = this.props.resources.map(resource => 
      <div key={resource.id}>
        <Table className={classes.Resources}>
          <thead>
            <tr>
              <td><button onClick={()=>showResource(resource.id)}>show</button></td>
              <td className='right aligned'>{resource.id}</td>
              <td className='right aligned'>{resource.title}</td>
              <td className='right aligned'>{resource.category}</td>
              <td className='right aligned'>{resource.description}</td>
              <td className='right aligned'>{resource.format}</td>
              <td className='right aligned'>{resource.location}</td>
            </tr>
          </thead>
        </Table>
      </div> 
    );

  return (
    <Aux>
      <div>
        <Table className={classes.Resources}>
          <thead>
            <tr>
              <th scope="row">ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Format</th>
              <th>Location</th>
            </tr>
          </thead>
        </Table>
        {resourcesList}
      </div>
      <Aux>
        {this.state.resourceInfo ? <Resource resource={this.state.resourceInfo} /> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Resources;
