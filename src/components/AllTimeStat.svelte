<script lang="ts">
  export let socialMedia: string;
  export let icon: string;
  export let userName: string;
  export let stat: number | string;
  export let statText: string;
  export let isPositive: boolean;
  export let todayStat: number | string;
  export let border: string;

  $: iconDirection = isPositive ? 'up' : 'down';
</script>

<article
  class="relative p-8 | flex flex-col items-center text-center | {border} rounded-b dark:bg-blue-gray-800 bg-blue-gray-100 cursor-pointer">
  <h3 class="sr-only">{socialMedia}</h3>
  <div class="flex items-center gap-2 mb-6">
    <i class="bx bxl-{icon} text-2xl" />
    <span class="text-sm font-bold light:text-blue-gray-750"> {userName}</span>
  </div>
  <div class="flex flex-col gap-2">
    <b class="text-5xl dark:text-white"> {stat}</b>
    <span class="text-xs uppercase tracking-[0.5rem]"> {statText} </span>
  </div>
  <div class="mt-8 | flex items-center | text-sm font-bold {isPositive ? 'text-lime' : 'text-red'}">
    <i class="bx bx-chevron-{iconDirection}" />
    <span>
      {todayStat} Today
    </span>
  </div>
</article>

<style>
  article::after {
    content: '';
    @apply absolute top-0 left-0 right-0 h-1 rounded-t;
  }
</style>
