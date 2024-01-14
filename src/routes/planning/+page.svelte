<script>
  import refreshPic from "$lib/images/arrows-rotate-solid.svg";
  import { tabIndex } from "./stores.js";
  import Tab1 from "./Tab1.svelte";
  import Tab2 from "./Tab2.svelte";
  import Tab3 from "./Tab3.svelte";
  import Tab4 from "./Tab4.svelte";
  import Tab5 from "./Tab5.svelte";
  import Tab6 from "./Tab6.svelte";
  import TabExit from "./TabExit.svelte";

  let activeTabValue = 1;

  tabIndex.subscribe((value) => {
    activeTabValue = value;
  });

  const items = [
    {
      value: 0,
      component: TabExit,
    },
    {
      value: 1,
      component: Tab1,
    },
    {
      value: 2,
      component: Tab2,
    },
    {
      value: 3,
      component: Tab3,
    },
    {
      value: 4,
      component: Tab4,
    },
    {
      value: 5,
      component: Tab5,
    },
    {
      value: 6,
      component: Tab6,
    },
  ];

  function backToStart() {
    tabIndex.set(1);
  }
</script>

<svelte:head>
  <title>Traceability Planning Tool</title>
  <meta name="planning" content="Traceability Planning Tool" />
</svelte:head>

<div class="container-fluid">
  <div class="row mt-5">
    <div class="col align-self-center m-0 p-0">
      <div class="card mx-auto" style="max-width: 1200px">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <h5 style="display: inline">
                Traceability Planning Tool <br />
                <small class="text-muted"
                  >What traceability system is right for your business?</small
                >
              </h5>
            </div>
            <div class="col" style="max-width: min-content">
              <button
                class="btn btn-light float-end"
                id="refreshTree2"
                type="button"
                aria-label="refresh"
                on:click={backToStart}
              >
                <img src={refreshPic} alt="refresh" style="height: 1.2rem" />
              </button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <div class="progress" style="height: 5px; margin-top: 0.81em">
                <div
                  id="progressBar"
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Decision tool progress"
                  style="width: {Math.round(
                    (Math.max(activeTabValue - 1, 0) / 5) * 100,
                  )}%"
                  aria-valuenow={activeTabValue - 1}
                  aria-valuemin="0"
                  aria-valuemax="5"
                ></div>
              </div>
            </div>
            <div class="col text-end" style="max-width: max-content">
              <small class="text-muted" id="progressText">
                {Math.max(activeTabValue - 1, 0)} of 5 questions complete
              </small>
            </div>
          </div>
        </div>
        <div class="card-body">
          {#each items as item}
            {#if activeTabValue == item.value}
              <div class="box">
                <svelte:component this={item.component} />
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
