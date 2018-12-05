import {HttpClient} from 'aurelia-fetch-client'

export default abstract class BaseRepository {
    private readonly _httpClient: HttpClient;
    protected readonly _resource: string;

    constructor(resource: string) {
        this._resource = resource;
        this._httpClient = this.buildClient()
    }

    protected async get(url?: string, params?: any): Promise<Response> {
      return this._httpClient.get(url, {body: params});
    }

    protected async delete(url?: string, body?: any): Promise<Response> {
      return this._httpClient.delete(url, body)
    }

    private buildClient(): HttpClient {
      let client = new HttpClient();
      client.configure(config => {
          config
              .withBaseUrl(`http://localhost:8066/api/${this._resource}`)
              .withDefaults({
                  credentials: 'same-origin',
                  headers: {
                      'Accept': 'application/json',
                      'X-Requested-With': 'Fetch'
                  }
              });
      })
      return client;
    }
}
