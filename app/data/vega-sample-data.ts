import { TopLevelSpec } from "vega-lite";

export const vegaData = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  config: {
    mark: {
      tooltip: true,
    },
    font: "Roboto, Arial, Noto Sans, sans-serif",
    padding: {
      top: 30,
      bottom: 20,
      left: 0,
      right: 0,
    },
    title: {
      color: "#262626",
      fontSize: 14,
    },
    axis: {
      labelPadding: 0,
      labelOffset: 0,
      labelFontSize: 10,
      gridColor: "#d9d9d9",
      titleColor: "#434343",
      labelColor: "#65676c",
      labelFont: " Roboto, Arial, Noto Sans, sans-serif",
    },
    axisX: {
      labelAngle: -45,
    },
    line: {
      color: "#1570EF",
    },
    bar: {
      color: "#1570EF",
    },
    legend: {
      symbolLimit: 15,
      columns: 1,
      labelFontSize: 10,
      labelColor: "#65676c",
      titleColor: "#434343",
      titleFontSize: 14,
    },
    range: {
      category: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
      ordinal: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
      diverging: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
      symbol: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
      heatmap: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
      ramp: [
        "#7763CF",
        "#444CE7",
        "#1570EF",
        "#0086C9",
        "#3E4784",
        "#E31B54",
        "#EC4A0A",
        "#EF8D0C",
        "#EBC405",
        "#5381AD",
      ],
    },
    point: {
      size: 60,
      color: "#1570EF",
    },
  },
  title: "Total Payments by Customer State",
  data: {
    values: [
      {
        customer_state: "PR",
        total_payment_value: 811156.379999998,
      },
      {
        customer_state: "BA",
        total_payment_value: 616645.8200000012,
      },
      {
        customer_state: "RJ",
        total_payment_value: 2144379.68999999,
      },
      {
        customer_state: "SE",
        total_payment_value: 75246.25,
      },
      {
        customer_state: "TO",
        total_payment_value: 61485.32999999993,
      },
      {
        customer_state: "AP",
        total_payment_value: 16262.8,
      },
      {
        customer_state: "SC",
        total_payment_value: 623086.43,
      },
      {
        customer_state: "PA",
        total_payment_value: 218295.85,
      },
      {
        customer_state: "MT",
        total_payment_value: 187029.28999999986,
      },
      {
        customer_state: "AL",
        total_payment_value: 96962.06000000003,
      },
      {
        customer_state: "RN",
        total_payment_value: 102718.13,
      },
      {
        customer_state: "AC",
        total_payment_value: 19680.62,
      },
      {
        customer_state: "GO",
        total_payment_value: 350092.3100000009,
      },
      {
        customer_state: "ES",
        total_payment_value: 325967.55000000045,
      },
      {
        customer_state: "AM",
        total_payment_value: 27966.93,
      },
      {
        customer_state: "MS",
        total_payment_value: 137534.84000000003,
      },
      {
        customer_state: "RR",
        total_payment_value: 10064.62,
      },
      {
        customer_state: "PI",
        total_payment_value: 108523.97000000003,
      },
      {
        customer_state: "SP",
        total_payment_value: 5998226.959999885,
      },
      {
        customer_state: "MG",
        total_payment_value: 1872257.2600000093,
      },
      {
        customer_state: "DF",
        total_payment_value: 355141.0799999998,
      },
      {
        customer_state: "MA",
        total_payment_value: 152523.02000000002,
      },
      {
        customer_state: "RS",
        total_payment_value: 890898.5399999967,
      },
      {
        customer_state: "CE",
        total_payment_value: 279464.0300000001,
      },
      {
        customer_state: "PE",
        total_payment_value: 324850.4399999999,
      },
      {
        customer_state: "PB",
        total_payment_value: 141545.7199999999,
      },
      {
        customer_state: "RO",
        total_payment_value: 60866.2,
      },
    ],
  },
  mark: {
    type: "bar",
  },
  width: "container",
  height: "container",
  autosize: {
    type: "fit",
    contains: "padding",
  },
  encoding: {
    x: {
      field: "customer_state",
      type: "nominal",
      title: "Customer State",
    },
    y: {
      field: "total_payment_value",
      type: "quantitative",
      title: "Total Payment Value",
    },
    color: {
      field: "customer_state",
      type: "nominal",
      title: "Customer State",
      scale: {
        range: [
          "#7763CF",
          "#444CE7",
          "#1570EF",
          "#0086C9",
          "#3E4784",
          "#E31B54",
          "#EC4A0A",
          "#EF8D0C",
          "#EBC405",
          "#5381AD",
        ],
      },
    },
    opacity: {
      condition: {
        param: "hover",
        value: 1,
      },
      value: 0.3,
    },
  },
  params: [
    {
      name: "hover",
      select: {
        type: "point",
        on: "mouseover",
        clear: "mouseout",
        fields: ["customer_state"],
      },
    },
  ],
} satisfies TopLevelSpec;
