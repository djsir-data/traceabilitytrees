<script>
  import { tabIndex, q3a, q3b } from "./stores.js";

  let tableInternal = [];
  let tableSupplier = [];
  q3a.subscribe((value) => {
    tableInternal = value;
  });
  q3b.subscribe((value) => {
    tableSupplier = value;
  });

  function nextTab() {
    collectResults();
    tabIndex.set(4);
    document.body.scrollIntoView();
  }
  function previousTab() {
    collectResults();
    tabIndex.set(2);
    document.body.scrollIntoView();
  }
  function addRowTabA() {
    tableInternal.push({ system: null, notes: null, example: false });
    tableInternal = tableInternal;
  }
  function addRowTabB() {
    tableSupplier.push({
      system: null,
      current: null,
      notes: null,
      example: false,
    });
    tableSupplier = tableSupplier;
  }
  function collectResults() {
    q3a.set(tableInternal);
    q3b.set(tableSupplier);
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
    <span class="text-muted">Q3.</span> How can a traceability system connect with
    and talk to current systems within your business and along the supply chain?
  </h6>
</div>
Remember that your investment in traceability systems typically has a positive business
impact, regardless of your business size, if you collaborate more with your suppliers
and customers. To achieve this impact, you need to make sure that your systems communicate
with each other.<br /><br />
Use the following table to list all your current business systems. In the notes/comments
column you should provide as much detail as possible about the system including manufacturer,
version number, etc.
<hr />
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem"
      >Internal business systems</span
    >
  </div>
  <div class="col" style="max-width: max-content">
    <button class="btn btn-outline-primary" on:click={addRowTabA}>
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Current business system</th>
        <th scope="col">Notes/comments</th>
      </tr>
    </thead>
    <tbody>
      {#each tableInternal as row}
        {#if row.example == true}
          <tr>
            <td>
              <span class="text-muted">{row.system}</span>
            </td>
            <td>
              <span class="text-muted">{row.notes}</span>
            </td>
          </tr>
        {:else}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Business system"
                class="form-control"
                bind:value={row.system}
              />
            </td>
            <td>
              <textarea
                class="form-control"
                style="min-width: 15rem"
                bind:value={row.notes}
              ></textarea>
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<hr />
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem"
      >Supply chain and customer systems</span
    ><br />
    Consider the points along the supply chain: Farm &#62; Food transformation &#62;
    Distribution &#62; Market (domestic / international) &#62; Wholesaler &#62; Transport
    and logistics &#62; Retailer
  </div>
  <div class="col" style="max-width: max-content">
    <button class="btn btn-outline-primary" on:click={addRowTabB}>
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped" id="custBus">
    <thead>
      <tr>
        <th scope="col">Company</th>
        <th scope="col">Current business systems</th>
        <th scope="col">Notes/comments</th>
      </tr>
    </thead>
    <tbody>
      {#each tableSupplier as row}
        {#if row.example == true}
          <tr>
            <td>
              <span class="text-muted">{row.system}</span>
            </td>
            <td>
              <span class="text-muted">{row.current}</span>
            </td>
            <td>
              <span class="text-muted">{row.notes}</span>
            </td>
          </tr>
        {:else}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Company"
                class="form-control"
                bind:value={row.system}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Current business systems"
                class="form-control"
                bind:value={row.current}
              />
            </td>
            <td>
              <textarea
                class="form-control"
                style="min-width: 15rem"
                bind:value={row.notes}
              ></textarea>
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
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
