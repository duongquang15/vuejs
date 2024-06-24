<template>
  <a-card title="Tài khoản" style="width: 100%" class="mb-3"></a-card>
  <div class="row mb-3">
    <div class="col-12 d-flex justify-content-end">
      <a-button type="primary">
        <router-link :to="{name:'admin-users-create'}">
          <i class="fa-solid fa-plus"></i>
        </router-link>
      </a-button>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
        <template #bodyCell="{ column, index, record }">
          <template v-if="column.key === 'index'">
            <span>{{ index + 1 }}</span>
          </template>

          <template v-if="column.key === 'departments'">
            <span v-if="record.department_id == 1" class="text-primary">{{
              record.departments
            }}</span>
            <span v-if="record.department_id == 2" class="text-danger">{{
              record.departments
            }}</span>
          </template>

          <template v-if="column.key === 'status'">
            <span v-if="record.status_id == 1" class="text-primary">{{
              record.status
            }}</span>
            <span v-if="record.status_id == 2" class="text-danger">{{
              record.status
            }}</span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../store/use-menu.js";
export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);

    const users = ref([]);

    const columns = [
      {
        title: "STT",
        dataIndex: "",
        key: "index",
      },
      {
        title: "Tài khoản",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Avatar",
        dataIndex: "avatar",
        key: "avatar",
      },
      {
        title: "Họ tên",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Phòng ban",
        dataIndex: "departments",
        key: "departments",
        // reponsive:["sm"],
      },
      {
        title: "Vai trò",
        key: "roles",
      },
      {
        title: "Tình trạng",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Công cụ",
        key: "actions",
        fixed: "right",
      },
    ];

    const getUser = () => {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then(function (response) {
          users.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getUser();
    return {
      users,
      columns,
    };
  },
});
</script>
