<template>
  <a-card title="Tạo mới tài khoản" style="width: 100%" class="mb-3">
    <div class="row">
      <div class="col-12 col-sm-4">
        <div class="row">
          <div class="col-12 d-flex justify-content-center mb-3">
            <a-avatar shape="square" :size="200">
              <template #icon>
                <img src="../../../assets/logo.jpg" />
              </template>
            </a-avatar>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <a-button type="primary">
              <i class="fa-solid fa-plus me-2"></i>
              <span>Chọn ảnh</span>
            </a-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-8">
        <div class="row mb-3">
          <!-- // tình trạng -->
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Tình trạng</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-select show-search placeholder="Tình trạng" style="width: 100%" :options="users_status"
              :filter-option="filterOption"></a-select>
          </div>
        </div>
        <!-- tên tk -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Tên tài khoản</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-input placeholder="Tên tài khoản" allow-clear />
          </div>
        </div>
        <!-- Họ tên -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Họ tên</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-input placeholder="Họ tên" allow-clear />
          </div>
        </div>
        <!-- Email -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Email</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-input placeholder="Email" allow-clear />
          </div>
        </div>
        <!-- phòng ban -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Phòng ban</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-select show-search placeholder="Phòng ban" style="width: 100%" :options="departments"
              :filter-option="filterOption"></a-select>
          </div>
        </div>
        <!-- Password -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Mật khẩu</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-input-password placeholder="Mật khẩu" allow-clear />
          </div>
        </div>

        <!-- RePassword -->
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>Nhập lại mật khẩu</span>
            </label>
          </div>
          <div class="col-12 col-sm-5">
            <a-input-password placeholder="Nhập lại mật khẩu" allow-clear />
          </div>
        </div>
      </div>
    </div>
    <!-- thêm/hủy -->
    <div class="row">
      <div class="col-12 d-sm-flex justify-content-sm-end d-grid mx-auto">
        <a-button danger class="me-0 me-sm-2 mb-3 mb-sm-0">
          <router-link :to="{ name: 'admin-users' }"><span>Hủy</span></router-link>
        </a-button>
        <a-button type="primary"><span>Lưu</span></a-button>
      </div>
    </div>
  </a-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../store/use-menu.js";
export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);

    const users_status = ref([]);
    const departments = ref([]);

    const getUserCreate = () => {
      axios
        .get("http://127.0.0.1:8000/api/users/create")
        .then(function (response) {
          users_status.value = response.data.users_status;
          departments.value = response.data.departments;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    getUserCreate();
    return {
      users_status,
      departments,
      filterOption
    }

  },
});
</script>
