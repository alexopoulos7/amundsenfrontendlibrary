import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GlobalState } from 'ducks/rootReducer';
import { getColumnTeam, updateColumnTeam } from 'ducks/tableMetadata/reducer';

import EditableText, { ComponentProps, DispatchFromProps, StateFromProps } from 'components/common/EditableText';

interface ContainerOwnProps {
  columnIndex: number;
}

export const mapStateToProps = (state: GlobalState, ownProps: ContainerOwnProps) => {
  return {
    refreshValue: state.tableMetadata.tableData.columns[ownProps.columnIndex].team,
  };
};

export const mapDispatchToProps = (dispatch: any, ownProps: ContainerOwnProps) => {
  const getLatestValue = function(onSuccess, onFailure) {
    return getColumnTeam(ownProps.columnIndex, onSuccess, onFailure);
  };
  const onSubmitValue = function(newValue, onSuccess, onFailure) {
    return updateColumnTeam(newValue, ownProps.columnIndex, onSuccess, onFailure);
  };

  return bindActionCreators({ getLatestValue, onSubmitValue } , dispatch);
};

export default connect<StateFromProps, DispatchFromProps, ComponentProps & ContainerOwnProps>(mapStateToProps, mapDispatchToProps)(EditableText);
