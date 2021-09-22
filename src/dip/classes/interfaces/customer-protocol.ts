export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cod: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  codCompany: string;
}
