const Easypost = require('@easypost/api');
const api = new Easypost('ngdShhAO5CaaO2eYqVxFxw');


const item = new api.CustomsItem({
    description: 'T-shirt',
    quantity: 1,
    value: 10,
    weight: 5,
    hs_tariff_number: '123456',
    origin_country: 'us'
  });

  const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',

    /* customs_items can be passed in as instances or ids.
    *  if the item does not have an id, it will be created. */
    customs_items: item
  });

  customsInfo.save().then(console.log).catch(console.log);

//   item.save().then(console.log).catch(console.log);
  
  item.save().then(() => {
  
  
//     customsInfo.save().then(console.log).catch(console.log);
  }).catch(console.log);


// const fromAddress = new api.Address({
//     company: 'EasyPost',
//     street1: '8989 egg street',
//     street2: '5th Floor',
//     city: 'Las Vegas',
//     state: 'NV',
//     zip: '94104',
//     phone: '415-528-7555'
// });

// fromAddress.save().then(console.log).catch(err => {err});



//api.Address.retrieve('adr_c185254eca4b412ca722c4d5a9ee1140').then(console.log).catch(err => {console.log(err)});

/**
 * Creating a new shipment using easyPost api
 */

//  const toAddress = api.Address.retrieve('adr_c185254eca4b412ca722c4d5a9ee1140');
//  const fromAddress = api.Address.retrieve('adr_3f6ddc16fa8c4c00abcd77921a82ceb1');
//  const ship_parcel = api.Parcel.retrieve('prcl_8d7b016dd5b5492a910ff021c2ff8d72');

//  const shipment = new api.Shipment({
//      to_address: toAddress,
//      from_address: fromAddress,
//      parcel: ship_parcel,
//      customs_info: null
//  })

//  shipment.save().then(console.log).catch(err=>{console.log(err)});

