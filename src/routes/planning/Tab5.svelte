<script>
  import { tabIndex, q5 } from "./stores.js";

  let tableContent = [];
  q5.subscribe((value) => {
    tableContent = value;
  });

  function nextTab() {
    collectResults();
    tabIndex.set(6);
    document.body.scrollIntoView();
  }
  function previousTab() {
    collectResults();
    tabIndex.set(4);
    document.body.scrollIntoView();
  }
  function collectResults() {
    q5.set(tableContent);
  }
  function addRow() {
    tableContent.push({
      purpose: null,
      data: null,
      source: null,
      visibility: null,
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
    <span class="text-muted">Q5.</span> What are your data accessibility needs?
  </h6>
</div>
Think about:
<ul>
  <li>What data do you want to be able to extract from your system?</li>
  <li>How will you get access to the data and in what form?</li>
  <li>Who else will require access to the data?</li>
</ul>
<br />
Consider the:
<ul>
  <li>
    six key drivers of traceability: Food safety, Market access, Biosecurity,
    Provenance, product certifications and attributes, supply chain efficiency
    and productivity.
  </li>
  <li>
    points along the supply chain: Farm &#62; Food transformation &#62;
    Distribution &#62; Market (domestic / international) &#62; Wholesaler &#62;
    Transport and logistics &#62; Retailer &#62; Consumer
  </li>
</ul>
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem">Accessibility needs</span>
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
        <th scope="col">Purpose</th>
        <th scope="col">What data</th>
        <th scope="col">Data source</th>
        <th scope="col">
          Which points along the supply chain require visibility?
        </th>
      </tr>
    </thead>
    <tbody>
      {#each tableContent as row}
        {#if row.example == true}
          <tr>
            <td>
              <span class="text-muted">{row.purpose}</span>
            </td>
            <td>
              <span class="text-muted">{row.data}</span>
            </td>
            <td>
              <span class="text-muted">{row.source}</span>
            </td>
            <td>
              <span class="text-muted">{row.visibility}</span>
            </td>
          </tr>
        {:else}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Purpose"
                class="form-control"
                bind:value={row.purpose}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="What data"
                class="form-control"
                bind:value={row.data}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Data source"
                class="form-control"
                bind:value={row.source}
              />
            </td>
            <td>
              <textarea
                class="form-control"
                style="min-width: 15rem"
                bind:value={row.visibility}
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
