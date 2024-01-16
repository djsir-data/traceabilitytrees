<script>
  import { tabIndex, q1 } from "./stores.js";

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
      if (wantsNone.length > 0) {
        tabIndex.set(0);
      } else {
        q1.set(selected.map((o) => ({ "Reason for traceability": o })));
        tabIndex.set(2);
      }
      document.body.scrollIntoView();
    }
  }
</script>

<div
  class="bg-secondary"
  style="margin-left: -1rem; padding-left: 1rem; margin-right: -1rem; padding-right: 1rem; margin-top: -1rem; padding-top: 1rem; padding-bottom: 1rem;"
>
  <h6
    class="display-6"
    style="font-size: 1.8rem; font-family: 'VIC-Regular'; padding-left: 3.1rem; text-indent: -3.1rem;"
  >
    <span class="text-muted">Q1.</span> What are the important elements of traceability
    for your business and the businesses you supply?
  </h6>
</div>
The reasons why a traceability system could be valuable in your business often relate
to at least one of the six key drivers of traceability (tick all boxes that apply
to your business and those you supply):
<div class="form-check mt-3">
  <input
    class="form-check-input"
    type="checkbox"
    value="Food safety"
    id="foodSafe"
    bind:group={selected}
  />
  <label class="form-check-label" for="foodSafe"> Food safety </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Market access"
    id="marketAccess"
    bind:group={selected}
  />
  <label class="form-check-label" for="marketAccess"> Market access </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Biosecurity"
    id="biosecurity"
    bind:group={selected}
  />
  <label class="form-check-label" for="biosecurity"> Biosecurity </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Provenance (location)"
    id="provenance"
    bind:group={selected}
  />
  <label class="form-check-label" for="provenance">
    Provenance (location)
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Product attributes and certifications"
    id="certifications"
    bind:group={selected}
  />
  <label class="form-check-label" for="certifications">
    Product attributes and certifications
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Productivity and supply chain efficiency"
    id="productivity"
    bind:group={selected}
  />
  <label class="form-check-label" for="productivity">
    Productivity and supply chain efficiency
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value="Traceability is not important to my business"
    id="notImportant"
    bind:group={wantsNone}
  />
  <label class="form-check-label" for="notImportant">
    <i>Traceability is not important to my business</i>
  </label>
</div>
<div class="text-center mt-3">
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
