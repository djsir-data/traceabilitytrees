<script>
  import { tabIndex } from "./stores.js";
  function toQ3() {
    tabIndex.set(4);
  }
</script>

<div class="card-body" style="overflow-x: auto">
  <p>
    If your business doesn’t have a traceability system, you may want to learn
    more about what traceability is and why it is important.
  </p>
  <ul>
    <li>
      Watch these <a
        href="https://agriculture.vic.gov.au/export/traceability/a-taste-you-can-trace"
        target="_blank">Case Studies</a
      > about traceability in practice.
    </li>
    <li>
      Join the <a
        href="https://agriculture.vic.gov.au/export/traceability/community"
        target="_blank">Traceability Community</a
      > and ask traceability experts your questions.
    </li>
    <li>
      Listen to the <a
        href="https://agriculture.vic.gov.au/support-and-resources/podcasts/agvic-talk-podcast-series/agvic-talk-season-6"
        target="_blank">Traceability Podcast</a
      > and hear from a wide range of speakers.
    </li>
    <li>
      When you are ready, continue on to <a
        href="#tabBenefits"
        on:click={() => toQ3()}>Q3 in the Traceability Decision Tree</a
      >.
    </li>
  </ul>
</div>
