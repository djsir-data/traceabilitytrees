<script>
  import { tabIndex, q4 } from "./stores.js";

  let tableContent = [];
  q4.subscribe((value) => {
    tableContent = value;
  });

  function nextTab() {
    collectResults();
    tabIndex.set(5);
    document.body.scrollIntoView();
  }
  function previousTab() {
    collectResults();
    tabIndex.set(3);
    document.body.scrollIntoView();
  }
  function collectResults() {
    q4.set(tableContent);
  }
  function addRow() {
    tableContent.push({
      Person: null,
      "Current capability": null,
      "Training needs": null,
      example: false,
    });
    tableContent = tableContent;
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
                        padding-left: 3.1rem;
                        text-indent: -3.1rem;
                      "
  >
    <span class="text-muted">Q4.</span> What digital capabilities are available in
    your business and what do you need to invest in?
  </h6>
</div>
Consider the staff currently working in your business, their abilities and current
time pressures/availability. How easy would it be for you to introduce a new process
or system with your current workforce?
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem">Digital needs</span>
  </div>
  <div class="col" style="max-width: max-content">
    <button class="btn btn-outline-primary" on:click={addRow}>
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Current capability</th>
        <th scope="col">Training needs</th>
      </tr>
    </thead>
    <tbody>
      {#each tableContent as row}
        {#if row.example == true}
          <tr>
            <td>
              <span class="text-muted">{row.Person}</span>
            </td>
            <td>
              <span class="text-muted">{row["Current capability"]}</span>
            </td>
            <td>
              <span class="text-muted">{row["Training needs"]}</span>
            </td>
          </tr>
        {:else}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Person"
                class="form-control"
                bind:value={row.Person}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Current capability"
                class="form-control"
                bind:value={row["Current capability"]}
              />
            </td>
            <td>
              <textarea
                class="form-control"
                style="min-width: 15rem"
                bind:value={row["Training needs"]}
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
