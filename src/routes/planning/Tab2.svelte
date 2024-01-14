<script>
  import { tabIndex } from "./stores.js";

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
    tabIndex.set(3);
  }
  function previousTab() {
    tabIndex.set(1);
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
  <h6
    class="display-6"
    style="
                        font-size: 1.8rem;
                        font-family: 'VIC-Regular';
                        padding-left: 3.2rem;
                        text-indent: -3.2rem;
                      "
  >
    <span class="text-muted">Q2.</span> How can a traceability system support your
    business operations and processes?
  </h6>
</div>
A fit-for-purpose traceability system does not involve making
<b>radical</b> changes to a business's operational processes. It should
<b>fit into and adapt</b>
to how the business operates and make financial sense.<br /><br />
Think about how it will:
<ul>
  <li>fit with your daily operations</li>
  <li>align with the systems your supply chain customers use</li>
</ul>

<div class="table-responsive">
  <table class="table table-striped my-4" id="supportTable">
    <thead>
      <tr>
        <th scope="col">Consideration</th>
        <th scope="col">Required</th>
        <th scope="col">List your requirements</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
<div class="row text-center">
  <div class="col">
    <button
      class="btn btn-primary"
      style="width: 80%"
      type="button"
      on:click={previousTab}
    >
      Back
    </button>
  </div>
  <div class="col">
    <button
      class="btn btn-primary"
      style="width: 80%"
      type="button"
      on:click={nextTab}
    >
      Next
    </button>
  </div>
</div>
