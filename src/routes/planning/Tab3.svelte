<script>
  import { tabIndex } from "./stores.js";

  function nextTab() {
    tabIndex.set(4);
  }
  function previousTab() {
    tabIndex.set(2);
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
    <span class="text-muted">Q3.</span> How can a traceability system connect with
    and talk to current systems within your business and along the supply chain?
  </h6>
</div>
Remember that your investment in traceability systems typically has a positive business
impact, regardless of your business size, if you collaborate more with your suppliers
and customers. To achieve this impact, you need to make sure that your systems communicate
with each other.<br /><br />
Use the following table to list all your current business systems. In the notes/comments
column you should provide as much detail as possible about the system including manufacturer,
version number, etc.
<hr />
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem"
      >Internal business systems</span
    >
  </div>
  <div class="col" style="max-width: max-content">
    <button class="btn btn-outline-primary" id="intBusNewRow">
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped" id="intBus">
    <thead>
      <tr>
        <th scope="col">Current business system</th>
        <th scope="col">Notes/comments</th>
      </tr>
    </thead>
    <tbody>
      <tr class="extras">
        <td>
          <span class="text-muted">Eg. Xero accounting package</span>
        </td>
        <td>
          <span class="text-muted"
            >Needs to dovetail into invoicing/ordering</span
          >
        </td>
      </tr>
      <tr class="extras">
        <td>
          <span class="text-muted">Eg. iPhone or Android</span>
        </td>
        <td>
          <span class="text-muted"
            >Want to be able to access the system by my phone/tablet</span
          >
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            placeholder="Business system"
            class="form-control"
          />
        </td>
        <td>
          <textarea class="form-control" style="min-width: 15rem"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            placeholder="Business system"
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
<hr />
<div class="row mt-3">
  <div class="col">
    <span class="display-6" style="font-size: 1.2rem"
      >Supply chain and customer systems</span
    ><br />
    Consider the points along the supply chain: Farm &#62; Food transformation &#62;
    Distribution &#62; Market (domestic / international) &#62; Wholesaler &#62; Transport
    and logistics &#62; Retailer
  </div>
  <div class="col" style="max-width: max-content">
    <button class="btn btn-outline-primary" id="custBusNewRow">
      + Add row
    </button>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped" id="custBus">
    <thead>
      <tr>
        <th scope="col">Company</th>
        <th scope="col">Current business systems</th>
        <th scope="col">Notes/comments</th>
      </tr>
    </thead>
    <tbody>
      <tr class="extras">
        <td>
          <span class="text-muted">E.g Transport company</span>
        </td>
        <td>
          <span class="text-muted">Xero | GS1 barcodes</span>
        </td>
        <td>
          <span class="text-muted">Must connect to GS1 compatible</span>
        </td>
      </tr>
      <tr class="extras">
        <td>
          <span class="text-muted">E.g. Retailer</span>
        </td>
        <td>
          <span class="text-muted"
            >Retail database and point of sale (POS) system</span
          >
        </td>
        <td>
          <span class="text-muted">Must connect to this system</span>
        </td>
      </tr>
      <tr class="extras">
        <td>
          <span class="text-muted">E.g. Food service</span>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Company" class="form-control" />
        </td>
        <td>
          <input
            type="text"
            placeholder="Current business systems"
            class="form-control"
          />
        </td>
        <td>
          <textarea class="form-control" style="min-width: 15rem"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Company" class="form-control" />
        </td>
        <td>
          <input
            type="text"
            placeholder="Current business systems"
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
