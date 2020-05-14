<template>
    <div className="m-3">
        <h3>존재하지 않는 경로</h3>
        <p>
            요청 경로 : {{fullPath}}
        </p>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const fullPath  = route.fullPath
        return { fullPath };
    }
}
</script>

<style>

</style>