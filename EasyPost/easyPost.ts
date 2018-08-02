import {Address, Parcel} from './interfaces/interfaces';
import EasyPost = require('@easypost/api');
const api = new EasyPost('ngdShhAO5CaaO2eYqVxFxw');

export class easyPost {
constructor(){}

 createAddress(myAddress) {
const exampleAddress = new api.Address({
  street1: myAddress.street1,
  street2: myAddress.street2,
  city: myAddress.city,
  state: myAddress.state,
  zip: myAddress.zip,
  country: myAddress.country,
  company: myAddress.company,
  phone: myAddress.phone,
});

  exampleAddress.save().then(console.log).catch(console.log);
}

retrieveAddress(address: string) {
    const retrievedAddress = api.Address.retrieve(address).then(console.log).catch(console.log);
}

verifyAddress(verifyAddress) {

}

createParcel(parcel: Parcel) {
    const exampleParcel = new api.Parcel({
        length: parcel.length,
        width: parcel.width,
        height: parcel.height,
        weight: parcel.weight
    });

    exampleParcel.save().then(console.log).catch(console.log);
}

retrieveParcel(parcelId: string) {
    api.Parcel.retrieve(parcelId).then(console.log).catch(console.log);
}

}

