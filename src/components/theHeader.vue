<template>
    <div class="container-fuild">
        <div class="row text-white" style="background-color:#0c713d;padding:1rem">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer()"><i class="fa-solid fa-align-justify"></i></span>
            </div>
            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/logo.jpg" alt="logo" height="32" width="34" class="ms-3 me-3">
                <span class="d-none d-sm-flex">QUẢN TRỊ</span>
            </div>
             
            <div class="col-sm-3 d-none d-sm-flex justify-content-center justify-content-sm-end ">
                <span>ADMIN</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerUser()">X</span>
            </div>
        </div>
    </div>

    <a-drawer
    v-model:open="open"
    title="Danh mục"
    placement="left"
  >
    <theMenu/>
  </a-drawer>

  <a-drawer
    v-model:open="open_user"
    title="Admin"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
 import { defineComponent,ref } from 'vue';
import theMenu from "../components/theMenu.vue";
export default defineComponent({
  components:{
    theMenu
  }
,
setup() {
  const open = ref(false);
  const open_user = ref(false);


  const showDrawer = () => {
    open.value = true;
  };
  const showDrawerUser = () => {
    open_user.value = true;
  };
  return {
    open,
    open_user,
    showDrawer,
    showDrawerUser
  }
}
})


</script>
