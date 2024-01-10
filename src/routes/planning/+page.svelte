<svelte:head>
  <title>Traceability Planning Tool</title>
  <meta name="planning" content="Traceability Planning Tool" />
</svelte:head>

<div class="container-fluid">
  <div class="row">
    <div class="col align-self-center m-0 p-0 justify-content-center">
      <div class="card mx-auto" style="max-width: 600px">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <h5 style="display: inline">
                Decision tree 1<br />
                <small class="text-muted"
                  >Do you currently have a traceability system in your business?</small
                >
              </h5>
            </div>
            <div class="col" style="max-width: min-content">
              <button
                class="btn btn-light float-end"
                id="refreshTree1"
                type="button"
                aria-label="refresh"
              >
                <img
                  src="../src/images/arrows-rotate-solid.svg"
                  alt="refresh"
                  style="height: 1.2rem"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="card-body" style="overflow-x: auto"></div>
      </div>
    </div>
  </div>
</div>
