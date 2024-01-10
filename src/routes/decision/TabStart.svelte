<script>
  import Checkbox from "./Checkbox.svelte";
  let selected = [];
</script>

<div class="card-body bg-primary mt-3" style="--bs-bg-opacity: .15;">
  <h4 class="mb-4">
    Q1. What benefits of traceability are important for your business?
  </h4>
  <p>
    There are many ways that a traceability system can benefit your business.
    The main benefits are summarised here and now is a good time to consider the
    ways that a traceability system can help you make business gains.
  </p>
  <p class="mb-1">Tick all the boxes that apply.</p>
</div>
<div class="card-body">
  <Checkbox
    label="Food safety"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="Export market access"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="Biosecurity"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="Provenance"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="Certifications"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="Productivity"
    popover="e.g. Keep track of stock location, temperature, prevent food fraud"
    bind:group={selected}
  ></Checkbox>
  <Checkbox
    label="None of the benefits are important to my business"
    popover="Immediate action may not be necessary at this stage. It is recommended to monitor your business supply chain for signs that traceability needs have changed. When you are ready, visit the Agriculture Victoria website to find helpful information and resources about traceability."
    bind:group={selected}
  ></Checkbox>
</div>
