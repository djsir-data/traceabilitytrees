<script>
  import Tabs from "./Tabs.svelte";
  import TabStart from "./TabStart.svelte";
  import TabExistingSys from "./TabExistingSys.svelte";
  import TabExitFindMore from "./TabExitFindMore.svelte";
  import TabBenefits from "./TabBenefits.svelte";
  import TabExitPlanning from "./TabExitPlanning.svelte";
  import TabInformation from "./TabInformation.svelte";
  import TabExitPlanning2 from "./TabExitPlanning2.svelte";
  import TabExitNeedsMet from "./TabExitNeedsMet.svelte";

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
    {
      value: 5,
      component: TabExitPlanning,
    },
    {
      value: 6,
      component: TabInformation,
    },
    {
      value: 7,
      component: TabExitPlanning2,
    },
    {
      value: 8,
      component: TabExitNeedsMet,
    },
  ];
</script>

<svelte:head>
  <title>Traceability Decision Tree</title>
  <meta name="decision" content="Traceability Decision Tree" />
</svelte:head>

<Tabs {items} />
