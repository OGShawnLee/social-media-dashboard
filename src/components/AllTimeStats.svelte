<script>
    import AllTimeStat from './AllTimeStat.svelte'
</script>

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