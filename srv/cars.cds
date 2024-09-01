
using {com.mani.chand as s} from '../db/schema';

service cars {
    entity cars as projection on s.cars;
    
  action uploadData(jsonData: String);
}
annotate cars.cars with  @odata.draft.enabled ;
annotate cars.cars with @(

     UI.LineItem           : [
        {
            Label: 'brand',
            Value: brand
        },
        {
            Label: 'model',
            Value: model
        },
        {
            Label: 'Price',
            Value: price
        },  
        {
            Label: 'year',
            Value: year
        }  
        ],
UI.FieldGroup #cars: {
        $Type: 'UI.FieldGroupType',
        Data : [
        {
            Label: 'brand',
            Value: brand
        },
        {
            Label: 'model',
            Value: model
        },
        {
            Label: 'Price',
            Value: price
        },
        {
            Label: 'year',
            Value: year
        }
        ],
},
 UI.Facets             : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'StockFacet',
        Label : 'Stock facets',
        Target: '@UI.FieldGroup#cars'
    }, ]
);
