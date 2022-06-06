export interface Menu {
  name?: string;
  link?: string;
  iconname?: string;
  submenu?: SubMenu
}

export interface SubMenu {
  name?: string;
  link?: string;
  iconname?: string;
  submenu?: SubMenu
}

export interface UserAccessMenu {
  Name: string;
  ModuleID: string;
  IconClass: string;
  DefaultRoute?: string;
  Sequence?:string;
  sections: Section[];
  pivot: Pivot
}

export interface Pivot {
  GroupID?: string;
  ModuleID?: string;
}

export interface Section {
  SectionID: string;
  Name:string;
  Sequence: string;
  menus: UserAccessMenu[];
  pivot: Pivot
}
