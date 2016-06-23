import React from 'react';

import ContextBlock from './contextBlock';
import {defined} from '../../../utils';

const DeviceContextType = React.createClass({
  propTypes: {
    alias: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired,
  },

  render() {
    let {name, model, model_id, arch, battery_level, orientation,
      ...data} = this.props.data;
    return (
      <ContextBlock
        data={data}
        knownData={[
          ['Name', name],
          ['Model', model + (model_id ? ` (${model_id})` : '')],
          ['Architecture', arch],
          ['Battery Level', defined(battery_level)
            ? `${battery_level}%` : null],
          ['Orientation', orientation],
        ]}
        alias={this.props.alias} />
    );
  }
});

export default DeviceContextType;
