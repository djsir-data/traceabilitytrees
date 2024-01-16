<script>
  import { tabIndex, q1, q2, q3a, q3b, q4, q5 } from "./stores.js";
  import * as XLSX from "xlsx-js-style";

  let q1_val = [];
  let q2_val = [];
  let q3a_val = [];
  let q3b_val = [];
  let q4_val = [];
  let q5_val = [];

  // First sheet - reasons
  q1.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q1. What are the important elements of traceability for your business and the businesses you supply?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "Reason for traceability",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      out.push([
        {},
        {
          v: i["Reason for traceability"],
        },
      ]);
    });
    q1_val = out;
  });

  //Second sheet - business operations
  q2.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q2. How can a traceability system support your business operations and processes?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "Consideration",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Is needed",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Requirements",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      if (i.needed == "Needed" || !!i.requirements) {
        out.push([
          {},
          { v: i.shortQuestion, s: { alignment: { wrapText: true } } },
          { v: i.needed, s: { alignment: { wrapText: true } } },
          { v: i.requirements, s: { alignment: { wrapText: true } } },
        ]);
      }
    });
    q2_val = out;
  });
  // Third sheet - business operations
  q3a.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q3. How can a traceability system connect with and talk to current systems within your business and along the supply chain?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [
        {},
        {
          v: "Internal business systems",
          s: {
            font: { italic: true, sz: "14" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "System",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Notes and comments",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      if (i.example == false) {
        out.push([
          {},
          { v: i.system, s: { alignment: { wrapText: true } } },
          { v: i.notes, s: { alignment: { wrapText: true } } },
        ]);
      }
    });
    q3a_val = out;
  });
  q3b.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q3. How can a traceability system connect with and talk to current systems within your business and along the supply chain?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [
        {},
        {
          v: "Supply chain and customer systems",
          s: {
            font: { italic: true, sz: "14" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "Company",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Current business systems",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Notes and comments",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      if (i.example == false) {
        out.push([
          {},
          { v: i.system, s: { alignment: { wrapText: true } } },
          { v: i.current, s: { alignment: { wrapText: true } } },
          { v: i.notes, s: { alignment: { wrapText: true } } },
        ]);
      }
    });
    q3b_val = out;
  });
  q4.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q4. What digital capabilities are available in your business and what do you need to invest in?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "Person",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Current capability",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Training needs",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      if (i.example == false) {
        out.push([
          {},
          { v: i.Person, s: { alignment: { wrapText: true } } },
          { v: i["Current capability"], s: { alignment: { wrapText: true } } },
          { v: i["Training needs"], s: { alignment: { wrapText: true } } },
        ]);
      }
    });
    q4_val = out;
  });
  q5.subscribe((value) => {
    let out = [
      [],
      [
        {},
        {
          v: "Q5. What are your data accessibility needs?",
          s: {
            font: { bold: true, sz: "16" },
          },
        },
      ],
      [],
      [
        {},
        {
          v: "Purpose",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "What data",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Data source",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
        {
          v: "Which points along the supply chain require visibility?",
          s: {
            font: { bold: true },
            border: { bottom: { style: "medium", color: { rgb: "000000" } } },
          },
        },
      ],
    ];
    value.map((i) => {
      if (i.example == false) {
        out.push([
          {},
          { v: i.purpose, s: { alignment: { wrapText: true } } },
          { v: i.data, s: { alignment: { wrapText: true } } },
          { v: i.source, s: { alignment: { wrapText: true } } },
          { v: i.visibility, s: { alignment: { wrapText: true } } },
        ]);
      }
    });
    q5_val = out;
  });

  function previousTab() {
    tabIndex.set(5);
    document.body.scrollIntoView();
  }

  function downloadXLSX() {
    const workbook = XLSX.utils.book_new();
    // Reasons sheet
    const sheet1 = XLSX.utils.aoa_to_sheet(q1_val);
    sheet1["!cols"] = [];
    sheet1["!cols"][1] = { wch: 8 };
    sheet1["!cols"][1].wpx = 300;
    XLSX.utils.book_append_sheet(workbook, sheet1, "Q1.Reasons");
    // Business operations sheet
    const sheet2 = XLSX.utils.aoa_to_sheet(q2_val);
    sheet2["!cols"] = [];
    sheet2["!cols"][1] = { wch: 8 };
    sheet2["!cols"][1].wpx = 200;
    sheet2["!cols"][2] = { wch: 8 };
    sheet2["!cols"][2].wpx = 105;
    sheet2["!cols"][3] = { wch: 8 };
    sheet2["!cols"][3].wpx = 250;
    XLSX.utils.book_append_sheet(workbook, sheet2, "Q2.Business operations");
    // Internal business systems
    const sheet3 = XLSX.utils.aoa_to_sheet(q3a_val);
    sheet3["!cols"] = [];
    sheet3["!cols"][1] = { wch: 8 };
    sheet3["!cols"][1].wpx = 100;
    sheet3["!cols"][2] = { wch: 8 };
    sheet3["!cols"][2].wpx = 300;
    XLSX.utils.book_append_sheet(workbook, sheet3, "Q3a.Business systems");
    // Supplier customer systems
    const sheet4 = XLSX.utils.aoa_to_sheet(q3b_val);
    sheet4["!cols"] = [];
    sheet4["!cols"][1] = { wch: 8 };
    sheet4["!cols"][1].wpx = 150;
    sheet4["!cols"][2] = { wch: 8 };
    sheet4["!cols"][2].wpx = 200;
    sheet4["!cols"][3] = { wch: 8 };
    sheet4["!cols"][3].wpx = 300;
    XLSX.utils.book_append_sheet(workbook, sheet4, "Q3b.Other systems");
    // capabilities
    const sheet5 = XLSX.utils.aoa_to_sheet(q4_val);
    sheet5["!cols"] = [];
    sheet5["!cols"][1] = { wch: 8 };
    sheet5["!cols"][1].wpx = 100;
    sheet5["!cols"][2] = { wch: 8 };
    sheet5["!cols"][2].wpx = 250;
    sheet5["!cols"][3] = { wch: 8 };
    sheet5["!cols"][3].wpx = 300;
    XLSX.utils.book_append_sheet(workbook, sheet5, "Q4.Capabilities");
    // Data needs
    const sheet6 = XLSX.utils.aoa_to_sheet(q5_val);
    sheet6["!cols"] = [];
    sheet6["!cols"][1] = { wch: 8 };
    sheet6["!cols"][1].wpx = 100;
    sheet6["!cols"][2] = { wch: 8 };
    sheet6["!cols"][2].wpx = 200;
    sheet6["!cols"][3] = { wch: 8 };
    sheet6["!cols"][3].wpx = 200;
    sheet6["!cols"][4] = { wch: 8 };
    sheet6["!cols"][4].wpx = 375;
    XLSX.utils.book_append_sheet(workbook, sheet6, "Q5.Data needs");

    //Save file
    XLSX.writeFile(workbook, "Traceability planning.xlsx", {
      compression: true,
    });
  }
</script>

<div
  class="bg-secondary"
  style="
                      margin-left: -1rem;
                      padding-left: 1rem;
                      margin-right: -1rem;
                      padding-right: 1rem;
                      margin-top: -1rem;
                      padding-top: 1rem;
                      padding-bottom: 1rem;
                    "
>
  <h6 class="display-6" style="font-size: 1.8rem; font-family: 'VIC-Regular'">
    Results
  </h6>
</div>
<div class="row justify-content-center">
  <div class="col-md-6 text-center my-3">
    <button
      class="btn btn-outline-primary"
      id="downloadResults"
      style="width: 100%"
      on:click={downloadXLSX}
    >
      Download results
    </button>
  </div>
</div>
<div id="resultsTables" class="my-3" style="display: none"></div>
Congratulations, you have completed Step 6 of the Traceability Quick Start Guide
to help understand what traceability system is right for your business.<br />
Hopefully you have a clearer idea about:
<ul>
  <li>what you want your business’ traceability system to do</li>
  <li>how it needs to fit into your current business operations</li>
  <li>the capabilities and resources you have available.</li>
</ul>
<strong>Next steps</strong>
<br />
Use these results as a starting point to discuss your system needs with a traceability
service provider.<br />
Reminder:
<ul>
  <li>
    complete the Quick Start Guide to help prepare for any technical
    discussions.
    <ul>
      <li>Step 1: Decide where to start</li>
      <li>Step 2: Decide what to trace</li>
      <li>Step 3: Decide how and where to collect data</li>
      <li>Step 4: Decide where to store and how to access and use the data</li>
      <li>Step 5: Create a business case</li>
      <li>
        Step 6: Select the traceability system to suit your needs (decision
        trees)
      </li>
    </ul>
  </li>
  <li>
    Refer to the checklist for prompts about additional system requirements and
    considerations.
  </li>
</ul>
<div class="row text-center">
  <div class="col">
    <button
      class="btn btn-primary"
      style="width: 30%"
      type="button"
      on:click={previousTab}
    >
      Back
    </button>
  </div>
</div>
