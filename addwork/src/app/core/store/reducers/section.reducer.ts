import { SectionActions, SectionActionTypes } from '../actions/section.action';

/**
 * Interface for the 'Section' data used in
 * - SectionState, and
 * - SectionReducer
 */
export interface SectionData {
  error: any;
  sections: any;
  sections_loading: boolean;
  sections_create: any;
  sections_create_loading: boolean;
  sections_delete: any;
  sections_delete_loading: boolean;
  sections_update: any;
  sections_update_loading: boolean;
  section_groups: any;
  section_groups_loading: boolean;
  section_group_create: any;
  section_group_create_loading: boolean;
  section_group_delete: any;
  section_group_delete_loading: boolean;
}

export interface SectionState {
  readonly Section: SectionData;
}

export const initialSectionState: SectionData = {
  error: null,
  sections: null,
  sections_loading: false,
  sections_create: null,
  sections_create_loading: false,
  sections_delete: null,
  sections_delete_loading: false,
  sections_update: null,
  sections_update_loading: false,
  section_groups: null,
  section_groups_loading: false,
  section_group_create: null,
  section_group_create_loading: false,
  section_group_delete: null,
  section_group_delete_loading: false
};

export const sectionReducer = (state = initialSectionState, action: SectionActions): SectionData => {
  switch (action.type) {
    case SectionActionTypes.LoadSections:
      return { ...state, sections_loading: true };

    case SectionActionTypes.LoadSectionsSuccess: {
      return { ...state, sections_loading: false, sections: action.payload };
    }

    case SectionActionTypes.LoadSectionsFail: {
      return { ...state, sections_loading: false, error: action.payload };
    }

    case SectionActionTypes.ResetSections: {
      return initialSectionState;
    }

    case SectionActionTypes.CreateSection:
      return { ...state, sections_create_loading: true };

    case SectionActionTypes.CreateSectionSuccess: {
      return { ...state, sections_create_loading: false, sections_create: action.payload };
    }

    case SectionActionTypes.CreateSectionFail: {
      return { ...state, sections_create_loading: false, sections_create: null, error: action.payload };
    }

    case SectionActionTypes.UpdateSection:
      return { ...state, sections_update_loading: true };

    case SectionActionTypes.UpdateSectionSuccess: {
      return { ...state, sections_update_loading: false, sections_update: action.payload };
    }

    case SectionActionTypes.UpdateSectionFail: {
      return { ...state, sections_update_loading: false, sections_update: null, error: action.payload };
    }

    case SectionActionTypes.DeleteSection:
      return { ...state, sections_delete_loading: true };

    case SectionActionTypes.DeleteSectionSuccess: {
      return { ...state, sections_delete_loading: false, sections_delete: action.payload };
    }

    case SectionActionTypes.DeleteSectionFail: {
      return { ...state, sections_delete_loading: false, sections_delete: null, error: action.payload };
    }

    case SectionActionTypes.LoadSectionGroups:
      return { ...state, section_groups_loading: true };

    case SectionActionTypes.LoadSectionGroupsSuccess: {
      return { ...state, section_groups_loading: false, section_groups: action.payload };
    }

    case SectionActionTypes.LoadSectionGroupsFail: {
      return { ...state, section_groups_loading: false, section_groups: null, error: action.payload };
    }

    case SectionActionTypes.CreateSectionGroup:
      return { ...state, section_group_create_loading: true };

    case SectionActionTypes.CreateSectionGroupSuccess: {
      return { ...state, section_group_create_loading: false, section_group_create: action.payload };
    }

    case SectionActionTypes.CreateSectionGroupFail: {
      return { ...state, section_group_create_loading: false, section_group_create: null, error: action.payload };
    }

    case SectionActionTypes.DeleteSectionGroup:
      return { ...state, section_group_delete_loading: true };

    case SectionActionTypes.DeleteSectionGroupSuccess: {
      return { ...state, section_group_delete_loading: false, section_group_delete: action.payload };
    }

    case SectionActionTypes.DeleteSectionGroupFail: {
      return { ...state, section_group_delete_loading: false, section_group_delete: null, error: action.payload };
    }

    case SectionActionTypes.ResetCRUDSection: {
      return {
        ...state,
        sections_create: null,
        sections_delete: null,
        sections_update: null,
        section_group_create: null,
        section_group_delete: null,
        error: null
      };
    }

    default:
      return state;
  }
};
