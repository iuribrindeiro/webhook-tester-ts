import { DialogService } from 'aurelia-dialog';
import { autoinject, computedFrom, bindable } from "aurelia-framework";
import RequestRepository from "repositories/request-repository";
import RequestModel from "models/request-model";
import * as uuid from "uuid";
import { RequestMethodBadgeMapper } from "request-method-badge-mapper";
import * as moment from "moment";
import { RequestDataModal } from 'resources/app/modals/request-data-modal';
import * as signalR  from '@aspnet/signalr'

@autoinject
export class App {
  @bindable clientId: string = null;
  public loadingRequests: boolean = true;
  public requests: RequestModel[] = [];
  public date: Date = new Date();
  private readonly _hubConnection: signalR.HubConnection;

  constructor(private readonly _requestRepository: RequestRepository, private readonly _dialogService: DialogService) {
    this._hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:2020').build();
  }

  public async attached() {
    this.clientId = localStorage.getItem('clientId')
    if (!this.clientId) {
      this.clientId = uuid()
      localStorage.setItem('clientId', this.clientId)
    }
    await this.loadRequests();

    this._hubConnection.on('RequestRecebidoEvent', (data: any) => {
      this.requests.push(new RequestModel(data))
    })
    this._hubConnection.on('RequestRemovidoEvent', (data: any) => {
      this.requests = this.requests.filter(r => r.id !== data.requestId)
    })
    this._hubConnection.on('RequestsEsvaziadosEvent', (data: any) => {
      this.requests = []
    })
  }

  public badgeClass(method: string) {
    return RequestMethodBadgeMapper[method]
  }

  public openModal(request) {
    this._dialogService.open({viewModel: RequestDataModal, model: request, lock: false})
  }

  public dateAsString(date: Date) {
    return moment(date).format('d/mm/Y h:mm')
  }

  public get aguardandoRequests(): boolean {
    return !this.loadingRequests && !this.requests.length;
  }

  public async deleteRequest(request: RequestModel) {
    try {
      await this._requestRepository.deleteRequest(request);
      this.requests = this.requests.filter(r => r.id !== request.id);
    } catch(err) {
      alert(err.message)
    }
  }

  public async deleteAllRequests() {
    try {
      this.loadingRequests = true;
      await this._requestRepository.deleteAll(this.clientId);
    }catch(err) {
      alert(err.message)
    } finally {
      this.loadingRequests = false;
    }
  }

  private async loadRequests(): Promise<void> {
    this.loadingRequests = true;
    try {
      this.requests = await this._requestRepository.getRequests(this.clientId)
    } catch(err) {
      alert(err.message)
    } finally {
      this.loadingRequests = false;
    }
  }
}
