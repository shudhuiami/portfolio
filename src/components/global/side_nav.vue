<template>
  <div class="sidenav-wrapper">
    <div class="nav-wrapper">
      <div class="user-info-wrapper">
        <div class="user-avatar" style="background-image: url('https://shudhuiami.github.io/resources/media/covers/cover_1.jpg')"></div>
        <div class="user-name">
          <div class="name-text">
            AHMED ZOBYER
          </div>
        </div>
      </div>
      <div class="nav-menu-wrapper">
        <ul class="nav-menu">
          <li class="each-menu">
            <router-link to="/" class="menu-link">
              <i class="las la-home"></i>
              HOME
            </router-link>
          </li>
          <li class="each-menu">
            <router-link to="resume" class="menu-link">
              <i class="las la-user-graduate"></i>
              RESUME
            </router-link>
          </li>
          <li class="each-menu">
            <router-link to="portfolio" class="menu-link">
              <i class="las la-project-diagram"></i>
              PORTFOLIO
            </router-link>
          </li>
          <li class="each-menu">
            <router-link to="blogs" class="menu-link">
              <i class="lab la-blogger"></i>
              BLOGS
            </router-link>
          </li>
          <li class="each-menu">
            <router-link to="contacts" class="menu-link">
              <i class="las la-voicemail"></i>
              CONTACT
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-bottom-wrapper">
      <ul class="social-btn-wrapper">
        <li class="each-btn">
          <a href="#">
            <i class="lab la-facebook"></i>
          </a>
        </li>
        <li class="each-btn">
          <a href="#">
            <i class="lab la-skype"></i>
          </a>
        </li>
        <li class="each-btn">
          <a href="#">
            <i class="lab la-youtube"></i>
          </a>
        </li>
        <li class="each-btn">
          <a href="#">
            <i class="lab la-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: ''
    }
  },
  watch: {

  },
  methods: {

  },
  created() {

  },
  mounted() {

  },
}
</script>

<style>

</style>
