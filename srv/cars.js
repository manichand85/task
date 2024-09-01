const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
  const { cars } = this.entities;

  this.on("uploadData", async (req) => {
    try {
      const jsonData = JSON.parse(req.data.jsonData);
      const tx = cds.transaction(req);
      const aInsertPromises = jsonData.map((oData) => {
        return tx.run(
          INSERT.into(cars).entries({
            brand: oData.brand || "",
            model: oData.model || "",
            price: oData.price || "",
            year: oData.year || "",
          })
        );
      });
      await Promise.all(aInsertPromises);

      await tx.commit();
      return { message: "Data imported successfully" };
    } catch (oError) {
      if (tx) {
        await tx.rollback();
      }
      console.error("Error uploading data: ", oError);
      req.error(500, "Error importing data.");
    }
  });
});
