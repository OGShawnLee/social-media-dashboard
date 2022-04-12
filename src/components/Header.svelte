<script>
  import ThemeToggler from './ThemeToggler.svelte';
</script>

<header
  class="max-w-xs mx-auto my-6 divide-y dark:divide-blue-gray-800 divide-blue-gray-750 | flex flex-col gap-6 justify-between sm:(max-w-xl) md:max-w-2xl lg:(max-w-4xl my-8 flex-row items-center divide-transparent) xl:max-w-6xl 2xl:max-w-8xl">
  <div>
    <h1 class="text-2xl font-bold dark:text-white">Social Media Dashboard</h1>
    <div class="text-sm font-bold light:text-blue-gray-750">
      <span> Total Followers: <b> 23,004 </b> </span>
    </div>
  </div>
  <ThemeToggler />
</header>

<style>
  header::after {
    content: '';
    @apply absolute top-0 right-0 left-0 h-72 dark:bg-blue-gray-850 light:bg-blue-gray-50 -z-10;
  }
</style>
