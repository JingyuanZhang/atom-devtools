<template>
    <div v-if="imgHTTPEles.length > 0">
        <p>img src http:</p>
        <div v-for="item in imgHTTPEles" >
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: mapState('log', {
        hasHTTPsource: state => state.hasHTTPsource,
        imgHTTPEles: state => state.eles
    }),
    methods: {
        filter (e) {
            bridge.send('filter-instances', e.target.value)
        }
    },
    mounted() {


    }
}
</script>
