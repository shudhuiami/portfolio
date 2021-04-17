<template>
  <div class="page-content-wrapper">
    <div class="section-wrapper">
      <div class="inner-container">
        <div class="section-head">
          <span>PORTFOLIO</span>
          <h2>My Works</h2>
        </div>
        <div class="section-portfolio-wrapper">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="each-project-wrapper">
                <img src="http://gtom.info/andrea/Dark/assets/images/services01.jpg">
                <div class="services-list-desc">
                  <h5 class="mb-0">Daaris</h5>
                  <p class="mt-3">LARAVEL, VueJS, SCSS ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="inner-container">
        <div class="section-head">
          <span>KIND WORDS</span>
          <h2>Testimonial</h2>
        </div>
        <div class="section-testimonial-wrapper">
          <VueSlickCarousel :arrows="true" :dots="true" >
            <div class="each-testimonial">
              <div class="single-testimonials-in mx-auto text-center">
                <div class="single-testimonials-head p-5">
                  <p>"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                </div>
                <div class="single-testimonials-foot mx-auto mt-4">
                  <img src="http://gtom.info/andrea/Dark/assets/images/avatar2.jpg" alt="" class="mx-auto b-box">
                  <h4 class="mt-3 font-weight-bold">Aster Joseph</h4>
                  <span class="mt-1 d-block">Web Developer</span>
                </div>
              </div>
            </div>
            <div class="each-testimonial">
              <div class="single-testimonials-in mx-auto text-center">
                <div class="single-testimonials-head p-5">
                  <p>"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                </div>
                <div class="single-testimonials-foot mx-auto mt-4">
                  <img src="http://gtom.info/andrea/Dark/assets/images/avatar2.jpg" alt="" class="mx-auto b-box">
                  <h4 class="mt-3 font-weight-bold">Aster Joseph</h4>
                  <span class="mt-1 d-block">Web Developer</span>
                </div>
              </div>
            </div>

            <template #prevArrow="arrowOption">
              <i class="las custom-arrow"></i>
            </template>
            <template #nextArrow="arrowOption">
              <i class="las custom-arrow"></i>
            </template>

          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Footer  from './../components/global/footer'
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
  components: {
    Footer, VueSlickCarousel
  }
}
</script>

<style>

</style>
