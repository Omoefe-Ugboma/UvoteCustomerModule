import { GroupActions, GroupActionTypes } from '../actions/group.action';

/**
 * Interface for the 'Group' data used in
 * - GroupState, and
 * - GroupReducer
 */
export interface GroupData {
  error: any;
  groups: any;
  groups_loading: boolean;
  groups_create: any;
  groups_create_loading: boolean;
  groups_update: any;
  groups_update_loading: boolean;
}

export interface GroupState {
  readonly Group: GroupData;
}

export const initialGroupState: GroupData = {
  error: null,
  groups: null,
  groups_loading: false,
  groups_create: null,
  groups_create_loading: false,
  groups_update: null,
  groups_update_loading: false,
};

export const groupReducer = (state = initialGroupState, action: GroupActions): GroupData => {
  switch (action.type) {
    case GroupActionTypes.LoadGroups:
      return { ...state, groups_loading: true };

    case GroupActionTypes.LoadGroupsSuccess: {
      return { ...state, groups_loading: false, groups: action.payload };
    }

    case GroupActionTypes.LoadGroupsFail: {
      return { ...state, groups_loading: false, error: action.payload };
    }

    case GroupActionTypes.ResetGroups: {
      return initialGroupState;
    }

    case GroupActionTypes.CreateGroup:
      return { ...state, groups_create_loading: true };

    case GroupActionTypes.CreateGroupSuccess: {
      return { ...state, groups_create_loading: false, groups_create: action.payload };
    }

    case GroupActionTypes.CreateGroupFail: {
      return { ...state, groups_create_loading: false, groups_create: null, error: action.payload };
    }

    case GroupActionTypes.UpdateGroup:
      return { ...state, groups_update_loading: true };

    case GroupActionTypes.UpdateGroupSuccess: {
      return { ...state, groups_update_loading: false, groups_update: action.payload };
    }

    case GroupActionTypes.UpdateGroupFail: {
      return { ...state, groups_update_loading: false, groups_update: null, error: action.payload };
    }

    case GroupActionTypes.ResetCRUDGroup: {
      return {
        ...state,
        groups_create: null,
        groups_update: null,
        error: null
      };
    }

    default:
      return state;
  }
};
