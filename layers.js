window.LAYERS = [

  /* =====================================
     TECHNOLOGY & INNOVATION ECOSYSTEM
  ===================================== */

  {
    id: "innovation-ecosystem",
    name: "Technology & Innovation Ecosystem",
    type: "sheet",

    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSB7IiUS_Fmsu17q__RYqAMeDkFQpo45FxG1bTQmS234zWANLELF61wyUOsFT4ehEVym_mX5D9IIDDy/pub?output=csv",

    latField: "Latitude",
    lngField: "Longitude"
  },

  /* =====================================
     OPPORTUNITY SITES
  ===================================== */

  {
    id: "opportunity-sites",
    name: "Opportunity Sites",
    type: "sheet",

    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOmFRs9WqWbsV18n0Ulujr-yNGiyEfFmiDzKQEXBuDBh-Cak-ZQdhczddXWLnRQcDk_1dmAawjtqb6/pub?output=csv",

    latField: "Latitude",
    lngField: "Longitude"
  },

  /* =====================================
     COUNTIES
  ===================================== */

  {
    id: "counties",
    name: "Counties",
    type: "rest",

    url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/2/query?where=NAME='Westchester'%20OR%20NAME='Rockland'%20OR%20NAME='Sullivan'%20OR%20NAME='Putnam'%20OR%20NAME='Ulster'%20OR%20NAME='Orange'%20OR%20NAME='Dutchess'&outFields=*&f=geojson"
  },

  /* =====================================
     TOWNS
  ===================================== */

  {
    id: "towns",
    name: "Towns",
    type: "rest",

    url: "https://services6.arcgis.com/EbVsqZ18sv1kVJ3k/arcgis/rest/services/NYS_Civil_Boundaries/FeatureServer/5/query?where=COUNTY_NAME='Westchester'%20OR%20COUNTY_NAME='Rockland'%20OR%20COUNTY_NAME='Sullivan'%20OR%20COUNTY_NAME='Putnam'%20OR%20COUNTY_NAME='Ulster'%20OR%20COUNTY_NAME='Orange'%20OR%20COUNTY_NAME='Dutchess'&outFields=*&f=geojson"
  }

];
