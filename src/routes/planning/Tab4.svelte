<script>
  import { tabIndex } from "./stores.js";

  function nextTab() {
    tabIndex.set(5);
  }
  function previousTab() {
    tabIndex.set(3);
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
    <button class="btn btn-outline-primary" id="digitalNeedsNewRow">
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped" id="digitalNeeds">
    <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Current capability</th>
        <th scope="col">Training needs</th>
      </tr>
    </thead>
    <tbody>
      <tr class="extras">
        <td>
          <span class="text-muted">E.g Business owner</span>
        </td>
        <td>
          <span class="text-muted">Office 365 (good with basics)</span>
        </td>
        <td>
          <span class="text-muted"
            >Refresher course to understand additional functionality</span
          >
        </td>
      </tr>
      <tr class="extras">
        <td>
          <span class="text-muted">E.g. QA manager</span>
        </td>
        <td>
          <span class="text-muted"
            >In-house designed Excel spreadsheet (proficient with Excel)</span
          >
        </td>
        <td>
          <span class="text-muted"
            >Require support to integrate the spreadsheet to a new system.</span
          >
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Person" class="form-control" />
        </td>
        <td>
          <input
            type="text"
            placeholder="Current capability"
            class="form-control"
          />
        </td>
        <td>
          <textarea class="form-control" style="min-width: 15rem"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Person" class="form-control" />
        </td>
        <td>
          <input
            type="text"
            placeholder="Current capability"
            class="form-control"
          />
        </td>
        <td>
          <textarea class="form-control" style="min-width: 15rem"></textarea>
        </td>
      </tr>
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
