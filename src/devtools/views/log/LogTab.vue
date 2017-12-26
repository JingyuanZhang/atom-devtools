<template>
    <div v-if="imgHTTPEles.length > 0">
        <p>img src http:</p>
        <div v-for="item in imgHTTPEles" >
            <span style="color:#3ba776"
                @mouseenter="enter(item)"
                @mouseleave="leave(item)">
                {{item.html}}
            </span>
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
        },
        enter (item) {
          bridge.send('enter-img-node', item.index)
        },
        leave (item) {
          bridge.send('leave-img-node', item.index)
        }
    }
}
</script>
