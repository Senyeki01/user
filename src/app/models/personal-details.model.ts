export interface PersonalDetails {
  id: number;
  firstName: string;
  lastName: string;
  IDnumber: string;
  email: string;
  password: string;
  phone: number;
  countryCode: number;
  gender: string;
  maritalStatus: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    suburb: string;
    city: string;
    postalCode: number;
    country: string;
  }
}