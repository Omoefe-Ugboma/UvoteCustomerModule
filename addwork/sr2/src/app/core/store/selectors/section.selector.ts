import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getSectionState = (state: AppState) => state.section;

export const getSectionsLoading = createSelector(getSectionState, state => state.sections_loading);

export const getSectionError = createSelector(getSectionState, state => state.error);

export const getSections = createSelector(getSectionState, state => state.sections);

export const getSectionBySectionID = (SectionID: string) => createSelector(getSections, sections => {
  if (sections) return sections.find((section: { SectionID: any; }) => section.SectionID == SectionID);
  return [];
});

export const createSection = createSelector(getSectionState, state => state.sections_create);

export const createSectionLoading = createSelector(getSectionState, state => state.sections_create_loading);

export const deleteSection = createSelector(getSectionState, state => state.sections_delete);

export const deleteSectionLoading = createSelector(getSectionState, state => state.sections_delete_loading);

export const updateSection = createSelector(getSectionState, state => state.sections_update);

export const updateSectionLoading = createSelector(getSectionState, state => state.sections_update_loading);

export const getSectionGroups = createSelector(getSectionState, state => state.section_groups);

export const getSectionGroupsLoading = createSelector(getSectionState, state => state.section_groups_loading);

export const createSectionGroup = createSelector(getSectionState, state => state.section_group_create);

export const createSectionGroupLoading = createSelector(getSectionState, state => state.section_group_create_loading);

export const deleteSectionGroup = createSelector(getSectionState, state => state.section_group_delete);

export const deleteSectionGroupLoading = createSelector(getSectionState, state => state.section_group_delete_loading);

