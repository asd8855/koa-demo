<template>
  <div class="payment-item">
    <img
      :src="leftIcon"
      alt=""
      class="payment-icon"
    >
    <div class="payment-left">
      <div class="payment-item-info">
        <div class="payment-ordername">{{item.title}}</div>
        <div class="payment-time">{{item.createdAt | date('yyyy-MM-dd')}}</div>
      </div>
      <div class="payment-money">
        {{item.totalFee.toFixed(2)}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    itemType: String
  },

  data() {
    return {
      leftIcon: ''
    }
  },

  created() {
    if (this.itemType == 'record') {
      this.leftIcon = require('../assets/payment-icon.png')
    } else {
      this.leftIcon = require('../assets/unpayment-icon.png')
    }
  },

}
</script>


<style lang="scss" scoped>
.payment-item {
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 0;
  margin-left: 12px;
  border-bottom: 1px solid #eee;
  .payment-icon {
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }
  .payment-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
  }
  .payment-item-info {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    .payment-ordername {
      font-size: 15px;
      color: #333;
    }
    .payment-time {
      font-size: 13px;
      color: #999999;
      margin-top: 6px;
    }
  }

  .payment-money {
    color: #333;
    font-size: 18px;
    font-family: DINMedium;
  }
}
</style>