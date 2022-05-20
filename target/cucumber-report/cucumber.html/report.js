$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I would like to search for the cars on  cars guide website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "90000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - All",
        "60000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "50000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "NT - North",
        "35000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Nissan",
        "Murano",
        "NSW - All",
        "45000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "ACT - All",
        "50000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7766214000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2903499100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"90000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 732423300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 841953100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2389878700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 275249500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 356713600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3303784500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6040333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 113001700,
  "status": "passed"
});
formatter.after({
  "duration": 1775669100,
  "status": "passed"
});
formatter.before({
  "duration": 9574857300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2156304700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 281273600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 628690800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2661502800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 347310900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 326425800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3323827100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5040774200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 59388700,
  "status": "passed"
});
formatter.after({
  "duration": 1639440500,
  "status": "passed"
});
formatter.before({
  "duration": 8983432500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2165085300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 274453600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 689481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2325102300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 295501600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 250416600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3336356900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4370643000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 114044400,
  "status": "passed"
});
formatter.after({
  "duration": 1719078300,
  "status": "passed"
});
formatter.before({
  "duration": 9687183400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2181688100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Civic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NT - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 278114500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 857451100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2370718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Civic",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 284171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 272108100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3316652800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3817476900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 131846400,
  "status": "passed"
});
formatter.after({
  "duration": 1707694200,
  "status": "passed"
});
formatter.before({
  "duration": 4742604100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2807974900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Murano\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 445350700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 849341900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2685869600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Murano",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 322005600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 266854000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3304222500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5105837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 300525600,
  "status": "passed"
});
formatter.after({
  "duration": 1811267800,
  "status": "passed"
});
formatter.before({
  "duration": 6217306500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2437366200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 451157700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 873318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2774231700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 294217700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 271438700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3312687600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3980907800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 232190100,
  "status": "passed"
});
formatter.after({
  "duration": 2000821600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Nissan",
        "Murano",
        "NSW - All",
        "30000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Newcastle",
        "50000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "ACT - All",
        "40000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Mazda",
        "CX-3",
        "QLD - All",
        "50000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Tesla",
        "Model 3",
        "NSW - All",
        "90000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "QLD - All",
        "45000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6175081400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2433185700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Murano\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 633892900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 985737000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2578204600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Murano",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 305917600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 272357300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3289243100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5456346400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 134137600,
  "status": "passed"
});
formatter.after({
  "duration": 1691736000,
  "status": "passed"
});
formatter.before({
  "duration": 6244800500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2381701900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 412404800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 899112300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2587668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 426543700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 309956400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3308878200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3522259400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 192951300,
  "status": "passed"
});
formatter.after({
  "duration": 1519604600,
  "status": "passed"
});
formatter.before({
  "duration": 6170084000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2682847100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Civic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 683425000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 816333100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2430183500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Civic",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 313878400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 267189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3278552300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6034007400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 56960200,
  "status": "passed"
});
formatter.after({
  "duration": 1919213100,
  "status": "passed"
});
formatter.before({
  "duration": 6177970300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2412995100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"CX-3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 375341800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 747975900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2685631800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CX-3",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 359717500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 279750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3349543200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5671559200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 347034200,
  "status": "passed"
});
formatter.after({
  "duration": 1834677600,
  "status": "passed"
});
formatter.before({
  "duration": 8766356000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2185959700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Tesla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Model 3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"90000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Tesla\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 288246100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 619420500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2306732900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Model 3",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 457004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 279047900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3325699600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3777846000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 52422600,
  "status": "passed"
});
formatter.after({
  "duration": 1652873700,
  "status": "passed"
});
formatter.before({
  "duration": 9781852200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2170423300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarTestSteps.iClickUsedLink()"
});
formatter.result({
  "duration": 326269100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 727887500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "SearchCarTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2395491000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 323288200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchCarTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 270804900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 16
    }
  ],
  "location": "SearchCarTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 3288574900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3561102800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "SearchCarTestSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 205732400,
  "status": "passed"
});
formatter.after({
  "duration": 1608011100,
  "status": "passed"
});
});