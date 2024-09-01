sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'car/test/integration/FirstJourney',
		'car/test/integration/pages/carsList',
		'car/test/integration/pages/carsObjectPage'
    ],
    function(JourneyRunner, opaJourney, carsList, carsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('car') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecarsList: carsList,
					onThecarsObjectPage: carsObjectPage
                }
            },
            opaJourney.run
        );
    }
);