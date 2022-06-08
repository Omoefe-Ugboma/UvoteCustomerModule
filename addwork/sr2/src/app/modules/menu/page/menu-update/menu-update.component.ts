import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { LoadGroups } from 'src/app/core/store/actions/group.action';
import { UpdateMenu, ResetCRUDMenu, DeleteMenu, LoadMenus, LoadMenuGroups, CreateMenuGroup, DeleteMenuGroup } from 'src/app/core/store/actions/menu.action';
import { LoadModules } from 'src/app/core/store/actions/module.action';
import { getGroups } from 'src/app/core/store/selectors/group.selector';
import { updateMenuLoading, updateMenu, getMenuError, deleteMenuLoading, deleteMenu, getMenuByMenuID, getMenuGroups, getMenuGroupsLoading, createMenuGroupLoading, createMenuGroup, deleteMenuGroupLoading, deleteMenuGroup } from 'src/app/core/store/selectors/menu.selector';
import { getModules } from 'src/app/core/store/selectors/module.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.css']
})
export class MenuUpdateComponent implements OnInit {

  loading!: boolean;
  deleting_menu!: boolean;
  menu_id: any;
  menu: any;
  menu_groups!: Observable<any>;
  menu_groups_loading!: Observable<boolean>;
  menu_create_group_loading!: boolean;
  menu_delete_group_loading!: boolean;
  groups: any;
  group_uuid_to_delete!: string;
  sections!: Observable<any>;

  isEnabled!: boolean;

  updateMenuForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // section_id: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  menuGroupForm = new FormGroup({
   group_uuid: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) {
    this.menu_id = this.activatedRoute.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.setFormValues();
    this.getMenuGroups();
    this.getModules();
  }

  get name() {
    return this.updateMenuForm.get('name') as FormControl;
  }

  get description() {
    return this.updateMenuForm.get('description') as FormControl;
  }

  // get section_id() {
  //   return this.updateMenuForm.get('section_id') as FormControl;
  // }

  get active() {
    return this.updateMenuForm.get('active') as FormControl;
  }

  get group_uuid() {
    return this.menuGroupForm.get('group_uuid') as FormControl;
  }

  updateMenu(form: FormGroupDirective) {
    if (this.updateMenuForm.valid) {
      this.store.dispatch(new UpdateMenu({...this.updateMenuForm.value, uuid: this.menu_id}));
      combineLatest(([this.store.select(updateMenuLoading), this.store.select(updateMenu), this.store.select(getMenuError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDMenu());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDMenu());
          }
        });
    }
  }

  deleteAMenu() {
    this.store.dispatch(new DeleteMenu({ uuid: this.menu_id }));
    combineLatest([this.store.select(deleteMenuLoading), this.store.select(deleteMenu), this.store.select(getMenuError)])
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDMenu());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDMenu());
        }
      });
  }

  setFormValues() {
    this.store.dispatch(new LoadMenus());
    this.store.dispatch(new LoadGroups());
    this.store.select(getMenuByMenuID(this.menu_id)).subscribe(menu => {
      if (menu) {
        this.menu = menu;
        this.name.setValue(menu.Name);
        this.description.setValue(menu.Description);
        this.active.setValue(menu.Active);
        // this.section_id.setValue(menu.ModuleID);
      }
    });
  }

  getMenuGroups() {
    this.store.dispatch(new LoadMenuGroups({ uuid: this.menu_id }));
    this.menu_groups = this.store.select(getMenuGroups);
    this.menu_groups_loading = this.store.select(getMenuGroupsLoading);
    this.groups = this.store.select(getGroups);
  }

  addMenuToGroups(form: FormGroupDirective) {
    if (this.menuGroupForm.valid) {
      const data = {...this.menuGroupForm.value, menu_uuid: [this.menu_id]};
      this.store.dispatch(new CreateMenuGroup(data));
      combineLatest(([this.store.select(createMenuGroupLoading), this.store.select(createMenuGroup), this.store.select(getMenuError)]))
        .subscribe(([loading, resp, error]) => {
          this.menu_create_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDMenu());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDMenu());
            this.getMenuGroups();
          }
        });
    }
  }

  removeMenuFromGroup() {
    const data = { group_uuid: this.group_uuid_to_delete, menu_uuid: [this.menu_id]};
      this.store.dispatch(new DeleteMenuGroup(data));
      combineLatest(([this.store.select(deleteMenuGroupLoading), this.store.select(deleteMenuGroup), this.store.select(getMenuError)]))
        .subscribe(([loading, resp, error]) => {
          this.menu_delete_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDMenu());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDMenu());
            this.getMenuGroups();
          }
        });
  }

  getModules() {
    this.store.dispatch(new LoadModules());
    this.sections = this.store.select(getModules);
  }

}
