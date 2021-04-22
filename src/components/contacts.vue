<template>
  <div class="page-content-wrapper">
    <div class="section-wrapper">
      <div class="inner-container">
        <div class="section-head">
          <span>SAY HELLO</span>
          <h2>Contact</h2>
        </div>
        <div class="contact-map-wrapper">
          <div id="footer-map-geolocation"></div>
          <div class="container">
            <div class="contact-details mt-2">
              <h5 class="section-subHead pt-5 mb-4"> Get in Touch</h5>
              <div class="row">
                <div class="col-sm-6 col-lg-6">
                  <div class="contact-details--panel p-4 b-box text-center  wow-none fadeInUp" data-wow-none-duration="1.5s">
                    <div class="mb-3 icon">
                      <i class="las la-mobile"></i>
                    </div>
                    <div class="mt-2">
                      <a href="tel:9876543210" class="text-underline">+8801762 011 847</a>
                      <p class="mt-2">Call Me</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <div class="contact-details--panel p-4 b-box text-center  wow-none fadeInUp" data-wow-none-duration="1.5s" data-wow-none-delay=".2s">
                    <div class="mb-3 icon">
                      <i class="las la-envelope"></i>
                    </div>
                    <div class="mt-2">
                      <a href="mailto:gtomdesign@gmail.com" class="text-underline">zobayer.me@gmail.com</a>
                      <p class="mt-2">Email Me</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-form mt-5">

              <form method="post" action="php/contact.php" name="contact-form" id="contactForm">
                <h5 class="section-subHead mb-4"> Contact Form</h5>
                <div id="formMessage" style="display: none;"><h3>Email Sending</h3></div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mt-3">
                      <input name="name" id="name" type="text" class="form-control b-box" placeholder="Your Name *" required="">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mt-3">
                      <input name="email" id="email" type="email" class="form-control b-box" placeholder="Your Email *" required="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <input type="text" class="form-control b-box" id="subject" placeholder="Your Subject.." required="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <textarea name="comments" id="comments" rows="4" class="form-control b-box" placeholder="Your message..."></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 mt-4 text-center">
                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-outline text-uppercase" value="Submit">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

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
    if ($('#footer-map-geolocation').length > 0) {
      const latLng = new google.maps.LatLng(23.177745571821784, 89.217808842659);
      const MAP = new google.maps.Map(document.getElementById('footer-map-geolocation'), {
        zoom: 10,
        center: latLng,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      });
      new google.maps.Marker({
        position: latLng,
        map: MAP
      });
    }
  },
  components: {
    Footer
  }
}
</script>

<style>

</style>
