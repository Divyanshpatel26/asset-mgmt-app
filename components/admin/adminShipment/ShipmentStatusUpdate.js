/* eslint-disable no-unused-vars */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class ShipmentStatusUpdate extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    shipmentActions.ShipmentUpdateStatus(match.params.id);
  }
  render() {
    const { shipments } = this.props;
    return (
      <div>
        <h4>Do you want to change the Shipment Status ?</h4>
        <h6>To DELIVERED</h6>
        <button onClick="window.location.href = '/shipment/status/update/${shipment.shipmentId}'">
          Update
          {this.props.history.push('/admin/shipment/all')}
          {/* return <Redirect to='/shipment/all'/> */}
        </button>
        <span> </span>
        <button onClick="window.location.href = '/admin/shipment/all';">
          Cancel
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shipments: state.shipmentReducer.shipmentStatus };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentStatusUpdate);
