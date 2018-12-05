import { autoinject } from 'aurelia-framework';1
import {DialogController} from 'aurelia-dialog';
import RequestModel from 'models/request-model';

@autoinject
export class RequestDataModal {
  public request: RequestModel;
  constructor(private readonly _dialogController: DialogController) {}

  activate(request: RequestModel) {
    this.request = request;
  }

  public dataJsonStringfied() {
    return JSON.stringify(this.request.data)
  }
}
