<script>
  import TodayStat from './TodayStat.svelte';
</script>

<section>
  <h2 class="mb-8 | text-2xl font-bold text-white">Overview - Today</h2>
  <div class="grid sm:grid-cols-2 gap-x-12 gap-y-6 children:(grid xl:grid-cols-2 gap-x-12 gap-y-8)">
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
