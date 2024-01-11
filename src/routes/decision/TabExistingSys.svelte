<script>
  import { tabIndex } from "./stores.js";
  function toExit() {
    tabIndex.set(3);
  }
  function toNextQuestion() {
    tabIndex.set(4);
  }
</script>

<div class="card-body bg-primary my-3" style="--bs-bg-opacity: .15;">
  <p>
    Traceability systems come in many forms and will vary depending on the needs
    of the business and its supply chain. In many cases, traceability systems
    share information about a product along its supply chain, across production,
    processing, and distribution.
  </p>
  <p>
    In a traceability system information can be recorded in any number of ways,
    such as, on paper, diary notes, or post-it notes. Or, information can be
    recorded in a digital system such as an app, excel spreadsheet, word
    document, email, or in business software systems.
  </p>
  <h4 class="mb-2">
    Q2. Does your business have a traceability system in place?
  </h4>
</div>
<div class="row my-3">
  <div class="col text-center">
    <button
      class="btn btn-primary"
      style="width: 50%"
      on:click={() => toNextQuestion()}
    >
      Yes
    </button>
  </div>
  <div class="col text-center">
    <button
      class="btn btn-primary"
      style="width: 50%"
      on:click={() => toExit()}
    >
      No
    </button>
  </div>
</div>
