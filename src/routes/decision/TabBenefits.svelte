<script>
  import { tabIndex } from "./stores.js";
  function toExit() {
    tabIndex.set(5);
  }
  function toNextQuestion() {
    tabIndex.set(6);
  }
</script>

<div
  id="tabBenefits"
  class="card-body bg-primary mt-3"
  style="--bs-bg-opacity: .15;"
>
  <p>
    The traceability system you have in place should fit with your daily
    operations and, in addition, help you make business gains through
    efficiencies such as digitalisation, instant data sharing and system
    alignment across the whole supply chain.
  </p>
  <p>
    Here are some examples of the ways that a traceability system can be of
    benefit to your business. Take a look at the examples provided and consider
    if you could be getting more from your system.
  </p>
  <h4 class="mb-0">
    Q3. Does your traceability system deliver on all of the benefits that are
    important to your business?
  </h4>
  <p>For example:</p>
  <ul>
    <li>
      Meet Australian <strong>food safety</strong> requirements e.g. Food Standards
      Australia New Zealand primary production and processing standards
    </li>
    <li>
      Meet <strong>export market</strong> requirements e.g. China, USA and Vietnam
    </li>
    <li>
      Meet Victorian and Australian <strong>biosecurity</strong> requirements e.g.
      managing pests and diseases
    </li>
    <li>
      Prove your <strong>product provenance</strong> e.g. managing issues such as
      food fraud or authenticate your brand claims
    </li>
    <li>
      Keep track of information to validate and verify <strong
        >certifications</strong
      > e.g. organic, sustainability, animal welfare
    </li>
    <li>
      Help you increase <strong>productivity</strong> and achieve business gains
      through improved efficiencies.
    </li>
  </ul>
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
