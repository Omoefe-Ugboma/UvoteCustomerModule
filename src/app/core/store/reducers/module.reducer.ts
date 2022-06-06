import { ModuleActions, ModuleActionTypes } from '../actions/module.action';

/**
 * Interface for the 'Module' data used in
 * - ModuleState, and
 * - ModuleReducer
 */
export interface ModuleData {
  error: any;
  modules: any;
  modules_loading: boolean;
  modules_create: any;
  modules_create_loading: boolean;
  modules_update: any;
  modules_update_loading: boolean;
  module_groups: any;
  module_groups_loading: boolean;
  module_group_create: any;
  module_group_create_loading: boolean;
  module_group_delete: any;
  module_group_delete_loading: boolean;
}

export interface ModuleState {
  readonly Module: ModuleData;
}

export const initialModuleState: ModuleData = {
  error: null,
  modules: null,
  modules_loading: false,
  modules_create: null,
  modules_create_loading: false,
  modules_update: null,
  modules_update_loading: false,
  module_groups: null,
  module_groups_loading: false,
  module_group_create: null,
  module_group_create_loading: false,
  module_group_delete: null,
  module_group_delete_loading: false
};

export const moduleReducer = (state = initialModuleState, action: ModuleActions): ModuleData => {
  switch (action.type) {
    case ModuleActionTypes.LoadModules:
      return { ...state, modules_loading: true };

    case ModuleActionTypes.LoadModulesSuccess: {
      return { ...state, modules_loading: false, modules: action.payload };
    }

    case ModuleActionTypes.LoadModulesFail: {
      return { ...state, modules_loading: false, error: action.payload };
    }

    case ModuleActionTypes.ResetModules: {
      return initialModuleState;
    }

    case ModuleActionTypes.CreateModule:
      return { ...state, modules_create_loading: true };

    case ModuleActionTypes.CreateModuleSuccess: {
      return { ...state, modules_create_loading: false, modules_create: action.payload };
    }

    case ModuleActionTypes.CreateModuleFail: {
      return { ...state, modules_create_loading: false, modules_create: null, error: action.payload };
    }

    case ModuleActionTypes.UpdateModule:
      return { ...state, modules_update_loading: true };

    case ModuleActionTypes.UpdateModuleSuccess: {
      return { ...state, modules_update_loading: false, modules_update: action.payload };
    }

    case ModuleActionTypes.UpdateModuleFail: {
      return { ...state, modules_update_loading: false, modules_update: null, error: action.payload };
    }

    case ModuleActionTypes.LoadModuleGroups:
      return { ...state, module_groups_loading: true };

    case ModuleActionTypes.LoadModuleGroupsSuccess: {
      return { ...state, module_groups_loading: false, module_groups: action.payload };
    }

    case ModuleActionTypes.LoadModuleGroupsFail: {
      return { ...state, module_groups_loading: false, module_groups: null, error: action.payload };
    }

    case ModuleActionTypes.CreateModuleGroup:
      return { ...state, module_group_create_loading: true };

    case ModuleActionTypes.CreateModuleGroupSuccess: {
      return { ...state, module_group_create_loading: false, module_group_create: action.payload };
    }

    case ModuleActionTypes.CreateModuleGroupFail: {
      return { ...state, module_group_create_loading: false, module_group_create: null, error: action.payload };
    }

    case ModuleActionTypes.DeleteModuleGroup:
      return { ...state, module_group_delete_loading: true };

    case ModuleActionTypes.DeleteModuleGroupSuccess: {
      return { ...state, module_group_delete_loading: false, module_group_delete: action.payload };
    }

    case ModuleActionTypes.DeleteModuleGroupFail: {
      return { ...state, module_group_delete_loading: false, module_group_delete: null, error: action.payload };
    }

    case ModuleActionTypes.ResetCRUDModule: {
      return {
        ...state,
        modules_create: null,
        modules_update: null,
        module_group_create: null,
        module_group_delete: null,
        error: null
      };
    }

    default:
      return state;
  }
};
