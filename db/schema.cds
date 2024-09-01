namespace com.mani.chand;
using {managed,cuid} from '@sap/cds/common';

entity cars:managed,cuid {
    brand     : String(10);
    model   : String(10);
    price    : String(10);
    year     : String(10);
}