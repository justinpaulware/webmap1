window.STYLES = {

  /* =========================
     POINTS
  ========================= */

  "opportunity-points": {
    type: "circle",
    paint: {
      "circle-radius": 6,
      "circle-color": "#2563eb",
      "circle-stroke-width": 1,
      "circle-stroke-color": "#ffffff"
    },
    legend: {
      type: "circle",
      color: "#2563eb",
      label: "Opportunity Sites"
    }
  },

  "innovation-points": {
    type: "circle",
    paint: {
      "circle-radius": 5,
      "circle-color": "#16a34a",
      "circle-stroke-width": 1,
      "circle-stroke-color": "#ffffff"
    },
    legend: {
      type: "circle",
      color: "#16a34a",
      label: "Innovation Sites"
    }
  },

  /* =========================
     LINES
  ========================= */

  "default-line": {
    type: "line",
    paint: {
      "line-color": "#2563eb",
      "line-width": 2
    },
    legend: {
      type: "line",
      color: "#2563eb",
      label: "Line Feature"
    }
  },

  "river": {
    type: "line",
    paint: {
      "line-color": "#0ea5e9",
      "line-width": 3
    },
    legend: {
      type: "line",
      color: "#0ea5e9",
      label: "Waterways"
    }
  },

  /* =========================
     POLYGONS / BOUNDARIES
  ========================= */

  "county-outline": {
    type: "line",
    paint: {
      "line-color": "#b45309",
      "line-width": 1.5
    },
    legend: {
      type: "line",
      color: "#b45309",
      label: "County Boundary"
    }
  },

  "county-fill": {
    type: "fill",
    paint: {
      "fill-color": "#f59e0b",
      "fill-opacity": 0.15,
      "fill-outline-color": "#b45309"
    },
    legend: {
      type: "fill",
      color: "#f59e0b",
      label: "County Area"
    }
  }

};
