import {Address, Parcel} from '../interfaces/interfaces';

export const myAddress: Address = {
    street1: '123 Street',
    street2: 'First Floor',
    city: 'Imaginary City',
    state: 'NV',
    zip: '12345',
    country: 'US',
    company: 'EasyPost',
    phone: '415-123-4567',
}

export const verifyAddress: Address = {
    verify: ['delivery'];
    street1: '123 Straet',
    street2: 'First Floor',
    city: 'Imaginary City',
    state: 'NV',
    zip: '12345',
    country: 'US',
    company: 'EasyPost',
    phone: '415-123-4567',
}

export const myParcel: Parcel = {
    length: 10,
    width: 10,
    height: 10,
    weight: 10
}