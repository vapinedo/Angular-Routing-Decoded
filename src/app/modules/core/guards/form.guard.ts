import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';

import { SaveDataI } from '@core/interfaces/save-data.interface';
import { MessageService } from '@core/services/message.service';

@Injectable()
export class FormGuard implements CanDeactivate<SaveDataI> {
  constructor(private messageSvc: MessageService) {}

  async canDeactivate(
    component: SaveDataI
  ): Promise<boolean | UrlTree> {
    if (!component.isDataSaved()) {
      const saveChanges = await this.messageSvc.confirm();
      return saveChanges.isConfirmed ? false : true;
    }
    return true;
  }
}
