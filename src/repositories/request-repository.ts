import RequestModel from '../models/request-model';
import BaseRepository from './base/repository-base';

export default class RequestRepository extends BaseRepository {
  constructor() {
    super("home")
  }

  public async getRequests(clientId: string): Promise<RequestModel[]> {
      let response = await this.get(`/${clientId}`);
      if (!response.ok)
        throw {message: (await response.json()).message}

      return (await response.json()).map(r => new RequestModel(r))
  }

  public async deleteRequest(request: RequestModel): Promise<void> {
      let response = await super.delete(`/remover/${request.id}/${request.clientId}`);
      if (!response.ok)
        throw {message: (await response.json()).message}
  }

  public async deleteAll(clientId: string): Promise<void> {
      let response = await super.delete(`/remover-todos/${clientId}`)
      if (!response.ok)
        throw {message: (await response.json()).message}
  }
}
