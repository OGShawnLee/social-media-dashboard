<script>
  import { useDarkTheme } from '../hooks';

  const theme = useDarkTheme('DARK', 'SOCIAL-DASHBOARD-OG-THEME-COLOR-KEY');

  $: themeText = $theme === 'DARK' ? 'Light' : 'Dark';
  $: thumbPosition = $theme === 'DARK' ? 'translate-x-1' : 'translate-x-9';
</script>

<div class="py-6 | flex items-center justify-between gap-6">
  <span class="text-sm font-bold light:text-blue-gray-750"> {themeText} Mode </span>
  <button
    class="relative h-8 w-16 | dark:(bg-gradient-to-r from-toggle-blue to-toggle-green) light:hover:(bg-gradient-to-r from-toggle-blue to-toggle-green) bg-toggle-light rounded-full"
    aria-label="Toggle Color Theme"
    aria-describedby="theme-toggler-description"
    title="Toggle Color Theme"
    on:click={theme.toggle}>
    <span class="sr-only" id="theme-toggler-description">
      Toggle Color Theme from dark mode to light mode and viceversa
    </span>

    <span
      class="absolute h-6 w-6 min-w-6 | block | dark:bg-blue-gray-900 bg-white rounded-full | transform animation over-y-center {thumbPosition}" />
  </button>
</div>

<style>
  .animation {
    @apply transition duration-150;
  }

  .over-y-center {
    @apply top-1/2 -translate-y-1/2;
  }
</style>
