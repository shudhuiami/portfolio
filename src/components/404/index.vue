<template>
    <div class="__404_wrapper">
        <div class="error_wrapper">
            <div class="background_ani" :style="{'background-image': 'url('+media.error_gif+')'}">
                <div class="header-title">Oops<span>!</span></div>
                <div class="slogan">We can't seem to find the page you're looking for.</div>
                <div class="action_wrapper">
                    <router-link to="/" class="action_trigger">GO BACK</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                core: core,
                media: {
                    error_gif: core.APP_PATH + '/alert.gif',
                },
            }
        },
        components: {}
    }
</script>

<style>

</style>
