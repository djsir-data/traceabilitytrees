<script>
  import { tabIndex, q2 } from "./stores.js";

  let questions;
  q2.subscribe((value) => {
    questions = value;
  });

  function nextTab() {
    collectResults();
    tabIndex.set(3);
    document.body.scrollIntoView();
  }
  function previousTab() {
    collectResults();
    tabIndex.set(1);
    document.body.scrollIntoView();
  }
  function collectResults() {
    q2.set(questions);
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
    <tbody>
      {#each questions as question}
        <tr>
          <td
            >{@html question.question}
            <small class="text-muted">{@html question.explanation}</small>
          </td>
          <td>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="Needed"
                bind:group={question.needed}
                name={question.id}
                id="{question.id}-y"
              />
              <label class="form-check-label" for="{question.id}-y">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="Not needed"
                name={question.id}
                id="{question.id}-n"
                bind:group={question.needed}
              />
              <label class="form-check-label" for="{question.id}-n"> No </label>
            </div>
          </td>
          <td>
            <label class="visually-hidden" for="{question.id}-text"
              >Requirements</label
            ><textarea
              class="form-control"
              placeholder="Requirements"
              id="{question.id}-text"
              style="min-width: 15rem;"
              bind:value={question.requirements}
            ></textarea>
          </td>
        </tr>
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
