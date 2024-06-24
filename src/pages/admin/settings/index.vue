<template>
        Đây là trang quản lý settings
</template>

<script>
import {useMenu} from "../../../store/use-menu.js";
export default {
        setup(){
                useMenu().onSelectedKeys(["admin-settings"]);
        },
}

</script>