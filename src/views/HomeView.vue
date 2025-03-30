<template>
    <div>
        <Navbar />
        <Banner />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';

export default {
    components: {
        Navbar,
        Banner,
    }
}
</script>