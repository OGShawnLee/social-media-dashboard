<script lang="ts">
  export let heading: string;
  export let icon: string;
  export let isPositive: boolean;
  export let stat: number | string;
  export let percentage: number | string;

  $: iconDirection = isPositive ? 'up' : 'down';
</script>

<article
  class="p-8 | flex flex-col gap-3 | dark:bg-blue-gray-800 bg-blue-gray-100 rounded-md cursor-pointer">
  <header class="flex items-center justify-between">
    <h4 class="capitalize font-bold light:text-blue-gray-750">{heading}</h4>
    <i class="bx bxl-{icon} text-2xl" />
  </header>
  <div class="flex items-end justify-between">
    <b class="text-3xl dark:text-white"> {stat}</b>
    <div class="font-bold text-xs {isPositive ? 'text-lime' : 'text-red'}">
      <i class="bx bx-chevron-{iconDirection}" />
      <span> {percentage}% </span>
    </div>
  </div>
</article>
