<script>
  import { AllTimeStats, Header, TodayStats } from './components';
</script>

<Header />

<main
  class="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl mx-auto | flex flex-col gap-12">
  <AllTimeStats />
  <TodayStats />
</main>

<style>
  :global(html.light article:hover) {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }

  :global(html.dark article:hover) {
    filter: brightness(120%);
  }
</style>
