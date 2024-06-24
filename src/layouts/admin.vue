<template>
    <theHeader />
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style="width:100%">
                    <theMenu/>
                    <template #header>
                      <div>Bảng điều khiển</div>
                    </template>
                  </a-list>
            </div>

            <div class="col-12 col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
    
</template>

<script>
    import theHeader from "../components/theHeader.vue";
    import theMenu from "../components/theMenu.vue";

    export default {
        components:{
            theHeader,
            theMenu
        }
    }

</script>