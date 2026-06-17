window.LAYERS = [
  /* =====================================
     ECONOMIC DEVELOPMENT
  ===================================== */

  {
    id: "innovation-ecosystem",
    name: "Technology & Innovation Ecosystem",
    group: "Economic Development",
    type: "sheet",

    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSB7IiUS_Fmsu17q__RYqAMeDkFQpo45FxG1bTQmS234zWANLELF61wyUOsFT4ehEVym_mX5D9IIDDy/pub?output=csv",

    latField: "Latitude",
    lngField: "Longitude"
  },

  {
    id: "opportunity-sites",
    name: "Opportunity Sites",
    group: "Economic Development",
    type: "sheet",

    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOmFRs9WqWbsV18n0Ulujr-yNGiyEfFmiDzKQEXBuDBh-Cak-ZQdhczddXWLnRQcDk_1dmAawjtqb6/pub?output=csv",

    latField: "Latitude",
    lngField: "Longitude"
  },

  /* =====================================
     GEOGRAPHY
  ===================================== */

  {
    id: "counties",
    name: "Counties",
    group: "Geography",
    type: "rest",

    url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/2/query?where=NAME='Westchester'%20OR%20NAME='Rockland'%20OR%20NAME='Sullivan'%20OR%20NAME='Putnam'%20OR%20NAME='Ulster'%20OR%20NAME='Orange'%20OR%20NAME='Dutchess'&outFields=*&f=geojson",

    initialExtentLayer: true
  },

  {
    id: "towns",
    name: "Towns",
    group: "Geography",
    type: "rest",

    url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/6/query?where=COUNTY='Westchester'%20OR%20COUNTY='Rockland'%20OR%20COUNTY='Sullivan'%20OR%20COUNTY='Putnam'%20OR%20COUNTY='Ulster'%20OR%20COUNTY='Orange'%20OR%20COUNTY='Dutchess'&outFields=*&f=geojson"
  }

];
