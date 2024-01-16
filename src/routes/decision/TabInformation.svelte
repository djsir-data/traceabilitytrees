<script>
  import { tabIndex } from "./stores.js";
  function toExit() {
    tabIndex.set(7);
  }
  function toNextQuestion() {
    tabIndex.set(8);
  }
</script>

<div
  id="tabBenefits"
  class="card-body bg-primary mt-3"
  style="--bs-bg-opacity: .15;"
>
  <p class="lead">
    Many producers are aware that using systems that are fast and can connect
    easily to other systems gives them a business advantage.
  </p>

  <h4>
    Q4. Does your traceability system provide quick and connected information
    along your supply chain?
  </h4>
  <br />
  <p>
    For example, if a food recall was needed would you be able to respond
    quickly and identify the source of contamination?
  </p>
  <p><i>Or</i></p>
  <p>
    For example, if an import country requested information about fertiliser
    application rates could you quickly provide that information?
  </p>
  <p><i>Or</i></p>
  <p>
    For example, if you needed to prove the temperature of fresh food in
    transit, would you be able to provide that information quickly?
  </p>
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
