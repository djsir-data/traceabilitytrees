<script>
  import refreshPic from "$lib/images/arrows-rotate-solid.svg";

  export let items = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div class="container-fluid">
  <div class="row mt-5">
    <div class="col align-self-center m-0 p-0 justify-content-center">
      <div class="card mx-auto" style="max-width: 1000px">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <h5 style="display: inline">
                Traceability Decision Tree<br />
                <small class="text-muted"
                  >Find out how a traceability system can meet your business
                  needs</small
                >
              </h5>
            </div>
            <div class="col" style="max-width: min-content">
              <button
                class="btn btn-light float-end"
                id="refreshDecision"
                type="button"
                aria-label="refresh"
              >
                <img src={refreshPic} alt="refresh" style="height: 1.2rem" />
              </button>
            </div>
          </div>
        </div>
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
