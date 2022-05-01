<script>
  import { Switch, SwitchDescription, SwitchLabel } from 'malachite-ui/components';
  import { useDarkTheme } from '../hooks';

  const theme = useDarkTheme('DARK', 'SOCIAL-DASHBOARD-OG-THEME-COLOR-KEY');

  $: isDarkMode = $theme === 'DARK';
  $: thumbPosition = isDarkMode ? 'translate-x-9' : 'translate-x-1';
</script>

<div class="py-6 | flex items-center justify-between gap-6">
  <Switch checked={isDarkMode} as="slot" let:button>
    <SwitchLabel class="text-sm font-bold light:text-blue-gray-750" passive>Dark Mode</SwitchLabel>
    <button
      class="relative h-8 w-16 | dark:(bg-gradient-to-r from-toggle-blue to-toggle-green) light:hover:(bg-gradient-to-r from-toggle-blue to-toggle-green) bg-toggle-light rounded-full"
      use:button
      on:click={theme.toggle}>
      <SwitchDescription class="sr-only">
        Switch from Light to Dark Theme and vice versa
      </SwitchDescription>
      <span
        aria-hidden="true"
        class="absolute h-6 w-6 min-w-6 | block | dark:bg-blue-gray-900 bg-white rounded-full | transform animation over-y-center {thumbPosition}" />
    </button>
  </Switch>
</div>

<style>
  .animation {
    @apply transition duration-150;
  }

  .over-y-center {
    @apply top-1/2 -translate-y-1/2;
  }
</style>
