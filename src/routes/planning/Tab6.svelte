<script>
  import { tabIndex } from "./stores.js";

  function previousTab() {
    tabIndex.set(5);
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
