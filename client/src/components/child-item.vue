<template>
  <div class="child-info">
    <div class="child-name">
      <span>{{child.childName}}</span>
      <div
        v-if="child.relationType == 'ALIPAY_ID' || child.relationType == 'WECHAT_UID' "
        class="delete-child"
        @click="deleteChild"
      >
        <span>删除</span>
      </div>
    </div>
    <div class="child-message-info">
      <div class="child-item">
        <div class="child-item-label">所在学校：</div>
        <span class="child-item-info">{{child.schoolName}}</span>
      </div>
      <div class="child-item">
        <div class="child-item-label">班级名称：</div>
        <span class="child-item-info">{{child.className}}</span>
      </div>
      <div class="child-item">
        <div class="child-item-label">{{child.studentCode ? '学生学号：':child.studentIdentityCard?'学生身份证号：':'家长手机号：'}}</div>
        <span class="child-item-info">{{child.studentCode ? child.studentCode:child.studentIdentityCard?child.studentIdentityCard:child.parentMobile}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    child: Object
  },
  methods: {
    deleteChild() {
      if (this.child && this.child.source == 'xys') {
        this.$emit('deleteChild');
      }
    }
  }
}

// USER_ID, UC 删不了
// VERIFYTYPE, 校易收 校验项关联 删不了
// ALIPAY_ID, 校易收 支付宝Id关联 可删 
// WECHAT_UID; 校易收 微信Id关联 可删 
</script>

<style lang="scss" scoped>
.child-info {
  display: flex;
  font-size: 15px;
  flex-direction: column;
  background: #fff;
  margin-bottom: 8px;
  .child-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    font-size: 17px;
    color: #333;
    border-bottom: 1px solid #eeeeee;
  }
  .child-item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding-bottom: 13px;
    font-size: 13px;
    color: #8c8c8c;
  }
  .child-item:first-child {
    padding-top: 13px;
  }

  .child-item-label {
    width: 100px;
  }

  .child-item-info {
    font-size: 13px;
    color: #333;
  }
  .delete-child {
    padding: 8px 8px;
    padding-right: 0;
    text-align: center;
    span {
      text-align: left;
      font-size: 15px;
      color: #ff4c63;
    }
  }
}
</style>