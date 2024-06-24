<template>
        Đây là trang quản lý roles
</template>

<script>
import {useMenu} from "../../../store/use-menu.js";
export default {
        setup(){
                useMenu().onSelectedKeys(["admin-roles"]);
        },
}

</script>