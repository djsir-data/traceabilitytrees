import { writable } from "svelte/store";

export const tabIndex = writable(1);
export const q1 = writable({});
export const q2 = writable([
  {
    id: "traceBulk",
    question: "My system needs to be able to trace bulk products.",
    shortQuestion: "My system needs to be able to trace bulk products.",
    explanation:
      "<br> Eg. Tracing bins of product along the supply chain from farm to food transformation.",
    needed: null,
    requirements: null,
  },
  {
    id: "indPack",
    question:
      "My system needs to be able to trace individually packaged products.",
    shortQuestion:
      "My system needs to be able to trace individually packaged products.",
    explanation:
      "<br>Eg. Tracing packaged products along the supply chain from point of food transformation to retailer or consumer.",
    needed: null,
    requirements: null,
  },
  {
    id: "wetCold",
    question:
      "My system needs to be suitable for use in wet or cold production and processing environments.",
    shortQuestion:
      "My system needs to be suitable for use in wet or cold production and processing environments.",
    explanation:
      "<br>Eg. When packaged, my product may be exposed to wet and/or varying temperature-controlled environments which may lead to stickers not adhering or labels deteriorating.",
    needed: null,
    requirements: null,
  },
  {
    id: "standards",
    question:
      "<p>My system needs to be compatible with data standards in other countries.</p><ul><li>If so, specify which countries your business is exporting to and if known, what data standards are used by your buyer.</li></ul>",
    shortQuestion:
      "My system needs to be compatible with data standards in other countries.",
    explanation:
      "E.g. Linked to global data standards, such as GS1. It’s important the standards used along the supply chain are interoperable (meaning: data is collected, stored and shared to communicate with other systems along the supply chain. Some systems may use different software but will be able to connect seamlessly).",
    needed: null,
    requirements: null,
  },
  {
    id: "languages",
    question:
      "<p>My product labelling needs to be written in languages other than English.</p><ul><li>If so, specify which countries and languages.</li></ul>",
    shortQuestion:
      "My product labelling needs to be written in languages other than English.",
    explanation: "",
    needed: null,
    requirements: null,
  },
  {
    id: "other",
    question:
      "<p>Other requirements specific to my business may include:<br>(List any that apply in the comments column, here are some examples)</p><ul><li>My product is subject to Xray screening, and this may damage digital loggers</li><li>Airfreight/seafreight approval is part of my supply chain process</li><li>My product is often subject to additional stickering by other business along the supply chain for transport and logistics purposes</li><li>Logging temperature during transport is essential for demonstrating food safety/customer compliance along the supply chain</li></ul>",
    shortQuestion: "Other requirements specific to my business.",
    explanation: "",
    needed: null,
    requirements: null,
  },
]);
export const q3a = writable([
  {
    system: "Eg. Xero accounting package",
    notes: "Needs to dovetail into invoicing/ordering",
    example: true,
  },
  {
    system: "Eg. iPhone or Android",
    notes: "Want to be able to access the system by my phone/tablet",
    example: true,
  },
  {
    system: null,
    notes: null,
    example: false,
  },
  {
    system: null,
    notes: null,
    example: false,
  },
]);
export const q3b = writable([
  {
    system: "E.g Transport company",
    current: "Xero | GS1 barcodes",
    notes: "Must connect to GS1 compatible",
    example: true,
  },
  {
    system: "E.g. Retailer",
    current: "Retail database and point of sale (POS) system",
    notes: "Must connect to this system",
    example: true,
  },
  {
    system: "E.g. Food service",
    current: "",
    notes: "",
    example: true,
  },
  {
    system: null,
    current: null,
    notes: null,
    example: false,
  },
  {
    system: null,
    current: null,
    notes: null,
    example: false,
  },
]);
export const q4 = writable([
  {
    Person: "E.g Business owner",
    "Current capability": "Office 365 (good with basics)",
    "Training needs": "Refresher course to understand additional functionality",
    example: true,
  },
  {
    Person: "E.g. QA manager",
    "Current capability":
      "In-house designed Excel spreadsheet (proficient with Excel)",
    "Training needs":
      "Require support to integrate the spreadsheet to a new system.",
    example: true,
  },
  {
    Person: null,
    "Current capability": null,
    "Training needs": null,
    example: false,
  },
  {
    Person: null,
    "Current capability": null,
    "Training needs": null,
    example: false,
  },
]);
export const q5 = writable([
  {
    purpose: "E.g. Food safety",
    data: "Batch numbers",
    source: "Packing sheets",
    visibility: "Farm, food transformation, retailer",
    example: true,
  },
  {
    purpose: "E.g. Market access",
    data: "Maximum residue limits (MRLs)",
    source: "Spray diary",
    visibility:
      "Farm, food transformation, distribution / freight forwarder and exporter",
    example: true,
  },
  {
    purpose: "E.g. Provenance",
    data: "Growing location",
    source: "QA records",
    visibility: "Farm, food transformation, market, retailer, consumer",
    example: true,
  },
  {
    purpose: null,
    data: null,
    source: null,
    visibility: null,
    example: false,
  },
  {
    purpose: null,
    data: null,
    source: null,
    visibility: null,
    example: false,
  },
]);

export const resetAll = () => {
  q2.set([
    {
      id: "traceBulk",
      question: "My system needs to be able to trace bulk products.",
      shortQuestion: "My system needs to be able to trace bulk products.",
      explanation:
        "<br> Eg. Tracing bins of product along the supply chain from farm to food transformation.",
      needed: null,
      requirements: null,
    },
    {
      id: "indPack",
      question:
        "My system needs to be able to trace individually packaged products.",
      shortQuestion:
        "My system needs to be able to trace individually packaged products.",
      explanation:
        "<br>Eg. Tracing packaged products along the supply chain from point of food transformation to retailer or consumer.",
      needed: null,
      requirements: null,
    },
    {
      id: "wetCold",
      question:
        "My system needs to be suitable for use in wet or cold production and processing environments.",
      shortQuestion:
        "My system needs to be suitable for use in wet or cold production and processing environments.",
      explanation:
        "<br>Eg. When packaged, my product may be exposed to wet and/or varying temperature-controlled environments which may lead to stickers not adhering or labels deteriorating.",
      needed: null,
      requirements: null,
    },
    {
      id: "standards",
      question:
        "<p>My system needs to be compatible with data standards in other countries.</p><ul><li>If so, specify which countries your business is exporting to and if known, what data standards are used by your buyer.</li></ul>",
      shortQuestion:
        "My system needs to be compatible with data standards in other countries.",
      explanation:
        "E.g. Linked to global data standards, such as GS1. It’s important the standards used along the supply chain are interoperable (meaning: data is collected, stored and shared to communicate with other systems along the supply chain. Some systems may use different software but will be able to connect seamlessly).",
      needed: null,
      requirements: null,
    },
    {
      id: "languages",
      question:
        "<p>My product labelling needs to be written in languages other than English.</p><ul><li>If so, specify which countries and languages.</li></ul>",
      shortQuestion:
        "My product labelling needs to be written in languages other than English.",
      explanation: "",
      needed: null,
      requirements: null,
    },
    {
      id: "other",
      question:
        "<p>Other requirements specific to my business may include:<br>(List any that apply in the comments column, here are some examples)</p><ul><li>My product is subject to Xray screening, and this may damage digital loggers</li><li>Airfreight/seafreight approval is part of my supply chain process</li><li>My product is often subject to additional stickering by other business along the supply chain for transport and logistics purposes</li><li>Logging temperature during transport is essential for demonstrating food safety/customer compliance along the supply chain</li></ul>",
      shortQuestion: "Other requirements specific to my business.",
      explanation: "",
      needed: null,
      requirements: null,
    },
  ]);
  q3a.set([
    {
      system: "Eg. Xero accounting package",
      notes: "Needs to dovetail into invoicing/ordering",
      example: true,
    },
    {
      system: "Eg. iPhone or Android",
      notes: "Want to be able to access the system by my phone/tablet",
      example: true,
    },
    {
      system: null,
      notes: null,
      example: false,
    },
    {
      system: null,
      notes: null,
      example: false,
    },
  ]);
  q3b.set([
    {
      system: "E.g Transport company",
      current: "Xero | GS1 barcodes",
      notes: "Must connect to GS1 compatible",
      example: true,
    },
    {
      system: "E.g. Retailer",
      current: "Retail database and point of sale (POS) system",
      notes: "Must connect to this system",
      example: true,
    },
    {
      system: "E.g. Food service",
      current: "",
      notes: "",
      example: true,
    },
    {
      system: null,
      current: null,
      notes: null,
      example: false,
    },
    {
      system: null,
      current: null,
      notes: null,
      example: false,
    },
  ]);
  q4.set([
    {
      Person: "E.g Business owner",
      "Current capability": "Office 365 (good with basics)",
      "Training needs":
        "Refresher course to understand additional functionality",
      example: true,
    },
    {
      Person: "E.g. QA manager",
      "Current capability":
        "In-house designed Excel spreadsheet (proficient with Excel)",
      "Training needs":
        "Require support to integrate the spreadsheet to a new system.",
      example: true,
    },
    {
      Person: null,
      "Current capability": null,
      "Training needs": null,
      example: false,
    },
  ]);
  q5.set([
    {
      purpose: "E.g. Food safety",
      data: "Batch numbers",
      source: "Packing sheets",
      visibility: "Farm, food transformation, retailer",
      example: true,
    },
    {
      purpose: "E.g. Market access",
      data: "Maximum residue limits (MRLs)",
      source: "Spray diary",
      visibility:
        "Farm, food transformation, distribution / freight forwarder and exporter",
      example: true,
    },
    {
      purpose: "E.g. Provenance",
      data: "Growing location",
      source: "QA records",
      visibility: "Farm, food transformation, market, retailer, consumer",
      example: true,
    },
    {
      purpose: null,
      data: null,
      source: null,
      visibility: null,
      example: false,
    },
    {
      purpose: null,
      data: null,
      source: null,
      visibility: null,
      example: false,
    },
  ]);
};
