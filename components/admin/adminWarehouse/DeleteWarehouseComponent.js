import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as warehouseActions from '../../../store/actions/WarehouseActions';

class DeleteWarehouseComponent extends React.Component {
  componentDidMount() {
    const { warehouseActions, match } = this.props;
    // calling redux function to fetch a particular id
    warehouseActions.fetchDeleteWarehouse(match.params.id);
  }
  render() {
    const { warehouses } = this.props;
    return (window.location.href = '/admin/warehouses/get/all');
  }
}

function mapStateToProps(state) {
  return { warehouses: state.warehouseReducer.warehouses };
}

function mapDispatchToProps(dispatch) {
  return {
    warehouseActions: bindActionCreators(warehouseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteWarehouseComponent);
