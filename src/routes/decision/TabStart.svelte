<script>
  import { tabIndex } from "./stores.js";
  import Tooltip from "./Tooltip.svelte";

  $: selected = [];
  $: wantsNone = [];
  $: canProceed = selected.length > 0 || wantsNone.length > 0;

  $: invalidateNone(selected);
  $: invalidateSelected(wantsNone);

  function invalidateNone(t) {
    if (t.length > 0) {
      wantsNone = [];
    }
  }
  function invalidateSelected(t) {
    if (t.length > 0) {
      selected = [];
    }
  }

  function nextTab() {
    if (canProceed == true) {
      tabIndex.set(2);
    }
  }
</script>

<div class="card-body bg-primary mt-3" style="--bs-bg-opacity: .15;">
  <p>
    There are many ways that a traceability system can benefit your business and
    now is a good time to consider the ways that a traceability system can help
    you make business gains.
  </p>
  <h4 class="mb-0">
    Q1. What benefits of traceability are important for your business?
  </h4>
  <small class="text-muted">Tick all boxes that apply </small>
</div>
<div class="card-body">
  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="safety"
      id="checkbox-safety"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-safety">
      Food safety<br />
      <small class="text-muted">
        e.g. Keep track of stock location, temperature, prevent food fraud</small
      >
    </label>
  </div>

  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="export"
      id="checkbox-export"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-export">
      Export market access<br />
      <small class="text-muted">
        e.g. meet international requirements and regulations</small
      >
    </label>
  </div>
  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="biosecurity"
      id="checkbox-biosecurity"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-biosecurity">
      Biosecurity<br />
      <small class="text-muted"> e.g. manage pest and diseases</small>
    </label>
  </div>
  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="provenance"
      id="checkbox-provenance"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-provenance">
      Provenance<br />
      <small class="text-muted"> e.g. prove product origin</small>
    </label>
  </div>
  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="certifications"
      id="checkbox-certifications"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-certifications">
      Certifications<br />
      <small class="text-muted"> e.g. organic, sustainability claims</small>
    </label>
  </div>
  <div class="form-check shorty py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="productivity"
      id="checkbox-productivity"
      bind:group={selected}
    />
    <label class="form-check-label" for="checkbox-productivity">
      Productivity<br />
      <small class="text-muted">
        e.g. business efficiencies, digitalisation, streamline processes</small
      >
    </label>
  </div>
  <div class="form-check py-2">
    <input
      class="form-check-input"
      type="checkbox"
      value="none"
      id="checkbox-none"
      bind:group={wantsNone}
    />
    <label class="form-check-label" for="checkbox-none">
      <i>None of the benefits are important to my business</i>
    </label>
  </div>
</div>
<div class="card-footer text-center">
  {#if canProceed == true}
    <button
      class="btn btn-primary"
      style="width: 50%"
      on:click={() => nextTab()}
    >
      Next
    </button>
  {:else}
    <button class="btn btn-primary disabled" style="width: 50%"> Next </button>
  {/if}
</div>

<style>
  .shorty {
    line-height: 0.8;
  }
</style>
