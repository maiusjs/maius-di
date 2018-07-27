class ServiceDescriptor {
  public fc: FunctionConstructor;
  public type: string;
  public instance: any;

  constructor(fc: FunctionConstructor) {
    this.fc = fc;
  }
}
export default ServiceDescriptor;
