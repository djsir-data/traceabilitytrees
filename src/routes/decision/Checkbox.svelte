<script>
  export let label;
  export let popover = null;
</script>

<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="checkbox-{label}"
  />
  <label class="form-check-label" for="checkbox-{label}">
    {label}
    {#if popover != null}
      <br /><small class="text-muted">{popover}</small>
    {/if}
  </label>
</div>
