export default class RequestModel {
  private _method: string;
  private _data: object;
  private _date: Date;
  private _clientId: string;
  private _id: string;

  constructor(data: any = {}) {
      this._method = data.method || null
      this._data = data.data|| null
      this._date = data.date || null
      this._clientId = data.clientId || null
      this._id = data.id || null
  }
  
  public get method(): string {
      return this._method;
  }

  public get data(): object {
      return this._data;
  }

  public get date(): Date {
      return this._date;
  }

  public get clientId(): string {
      return this._clientId;
  }

  public get id(): string {
      return this._id;
  }
}
