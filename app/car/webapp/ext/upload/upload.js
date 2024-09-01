sap.ui.define(
  ["sap/m/MessageToast", "sap/ui/core/mvc/View"],
  function (MessageToast, View) {
    "use strict";

    return {
      uploadFile: function (oEvent) {
        var oView = this.editFlow.getView();
        var oDialog = oView.byId("dialog");
        if (!oDialog) {
          View.create({
            viewName: "car.view.Dialog",
            type: sap.ui.core.mvc.ViewType.XML,
          }).then(function (oDialogView) {
            oView.addDependent(oDialogView);
            oDialog = oDialogView.byId("dialog");
            if (oDialog) {
              oDialog.open();
            } else {
              console.error("Error");
            }
          });
        } else {
          oDialog.open();
        }
      },
    };
  }
);
