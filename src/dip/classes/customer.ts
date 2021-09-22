import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cod: string;

  constructor(firstName: string, lastName: string, cod: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cod = cod;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cod;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  codCompany: string;

  constructor(name: string, codCompany: string) {
    this.name = name;
    this.codCompany = '';
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.codCompany;
  }
}
