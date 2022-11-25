export abstract class Entidade {
  private _id?: number;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

}