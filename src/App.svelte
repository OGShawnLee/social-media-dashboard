<script>
  import { AllTimeStat, Header, TodayStat } from './components';
</script>

<Header />

<main
  class="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl mx-auto | flex flex-col gap-12">
  <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
    <AllTimeStat
      socialMedia="Facebook"
      icon="facebook-square text-facebook"
      userName="@nathanf"
      stat={1987}
      statText="Followers"
      isPositive={true}
      todayStat={12}
      border="after:bg-facebook" />
    <AllTimeStat
      socialMedia="Twitter"
      icon="twitter text-twitter"
      userName="@nathanf"
      stat={1044}
      statText="Followers"
      isPositive={true}
      todayStat={99}
      border="after:bg-twitter" />
    <AllTimeStat
      socialMedia="Instagram"
      icon="instagram text-transparent bg-clip-text bg-gradient-to-r from-instagram-yellow to-instagram-pink"
      userName="@realnathanf"
      stat="11K"
      statText="Followers"
      isPositive={true}
      todayStat={1099}
      border="after:(bg-gradient-to-r from-instagram-yellow to-instagram-pink)" />
    <AllTimeStat
      socialMedia="Youtube"
      icon="youtube text-youtube"
      userName="Nathan F."
      stat={8239}
      statText="Followers"
      isPositive={false}
      todayStat={144}
      border="after:bg-youtube" />
  </section>
  <section>
    <h2 class="mb-8 | text-2xl font-bold text-white">Overview - Today</h2>
    <div
      class="grid sm:grid-cols-2 gap-x-12 gap-y-6 children:(grid xl:grid-cols-2 gap-x-12 gap-y-8)">
      <section>
        <h3 class="sr-only">Facebook Stats</h3>
        <TodayStat
          heading="Page Views"
          icon="facebook-square text-facebook"
          stat={87}
          percentage={3}
          isPositive />
        <TodayStat
          heading="Likes"
          icon="facebook-square text-facebook"
          stat={52}
          percentage={2}
          isPositive={false} />
      </section>
      <section>
        <h3 class="sr-only">Instagram</h3>
        <TodayStat
          heading="Likes"
          icon="instagram text-transparent bg-clip-text bg-gradient-to-r from-instagram-yellow to-instagram-pink"
          stat={5462}
          percentage={2257}
          isPositive />
        <TodayStat
          heading="Profile Views"
          icon="instagram text-transparent bg-clip-text bg-gradient-to-r from-instagram-yellow to-instagram-pink"
          stat="52K"
          percentage={1375}
          isPositive />
      </section>
      <section>
        <h3 class="sr-only">Twitter</h3>
        <TodayStat
          heading="Retweets"
          icon="twitter text-twitter"
          stat={117}
          percentage={303}
          isPositive />
        <TodayStat
          heading="Likes"
          icon="twitter text-twitter"
          stat={507}
          percentage={553}
          isPositive />
      </section>
      <section>
        <h3 class="sr-only">Youtube</h3>
        <TodayStat
          heading="Likes"
          icon="youtube text-youtube"
          stat={107}
          percentage={19}
          isPositive={false} />
        <TodayStat
          heading="Total Views"
          icon="youtube text-youtube"
          stat={1407}
          percentage={12}
          isPositive={false} />
      </section>
    </div>
  </section>
</main>

<style>
  :global(html.light article:hover) {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }

  :global(html.dark article:hover) {
    filter: brightness(120%);
  }
</style>
