<script>
  import Tabs from "./Tabs.svelte";
  import TabStart from "./TabStart.svelte";
  import TabExistingSys from "./TabExistingSys.svelte";
  import TabExitFindMore from "./TabExitFindMore.svelte";
  import TabBenefits from "./TabBenefits.svelte";

  const items = [
    {
      value: 1,
      component: TabStart,
    },
    {
      value: 2,
      component: TabExistingSys,
    },
    {
      value: 3,
      component: TabExitFindMore,
    },
    {
      value: 4,
      component: TabBenefits,
    },
  ];
</script>

<svelte:head>
  <title>Traceability Decision Tree</title>
  <meta name="decision" content="Traceability Decision Tree" />
</svelte:head>

<Tabs {items} />
