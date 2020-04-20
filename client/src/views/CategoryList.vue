<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="类别列表" />
    </div>

    <div>
      <van-row>
        <van-col span="6">
          <div id="leftNav">
            <ul>
              <li
                @click="clickCategory(index, item.ID)"
                :class="{'categoryActice': categoryIndex == index}"
                v-for="(item, index) in category"
                :key="item.ID"
              >
                {{item.MALL_CATEGORY_NAME}}
              </li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="tabCategorySub">
            <van-tabs
              v-model="active"
              @change="clickCategorySub"
            >
              <van-tab
                v-for="item in categorySub"
                :key="item.ID"
                :title="item.MALL_SUB_NAME"
              >

              </van-tab>
            </van-tabs>
          </div>
          <div id="list-div">
            <van-pull-refresh
              v-model="isRefresh"
              @refresh="onRefresh"
            >
              <van-list
                v-model="loading"
                :immediate-check="false"
                :finished="finished"
                @load="onLoad"
              >
                <div
                  class="list-item"
                  v-for="item in list"
                  :key="item.ID"
                  @click="gotoGoodsDetail(item.ID)"
                >
                  {{item.NAME}}
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import GoodSev from '@/api/good';
const pageSize = 10;
export default {
  data() {
    return {
      category: [],
      categoryIndex: 0,
      categorySub: [], // 小类类别
      active: 0, // 激活标签的值
      loading: false,
      finished: false, // 上拉加载是否有数据
      list: [], // 商品数据
      isRefresh: false, // 下拉刷新
      pageIndex: 1
    }
  },
  created() {
    this.getCategoryList()
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height = winHeight - 46 + 'px'
    document.getElementById('list-div').style.height = winHeight - 90 + 'px'
  },
  methods: {
    async getCategoryList() {
      const res = await GoodSev.getCategoryList();
      if (res.code == 200) {
        this.category = res.message;
        this.getCategorySubList(this.category[0].ID);
      } else {
        Toast('服务器错误，数据获取失败')
      }
    },

    // 根据大类ID读取小类类别列表
    async getCategorySubList(categoryId) {
      const res = await GoodSev.getCategorySubList({ categoryId: categoryId });
      if (res.code == 200) {
        this.categorySub = res.message;
        this.active = 0;
        this.categorySubId = this.categorySub[0].ID;
        this.pageIndex = 1;
        this.getGoodsListByCategorySubId();
      }
    },
    async getGoodsListByCategorySubId() {
      if (!this.categorySubId) {
        return;
      }
      const res = await GoodSev.getGoodsListByCategorySubId({ categorySubId: this.categorySubId, pageIndex: this.pageIndex, pageSize: pageSize });
      this.loading = false;
      this.isRefresh = false;
      if (res.code == 200) {
        let list = res.message;
        if (this.pageIndex == 1) {
          this.list = list;
        } else {
          this.list = this.list.concat(list);
        }
        if (list.length < pageSize) {
          this.finished = true;
        } else {
          this.pageIndex++;
          this.finished = false;
        }
      }
    },

    clickCategory(index, categoryId) {
      this.categoryIndex = index
      this.getCategorySubList(categoryId)
    },

    clickCategorySub(index) {
      this.categorySubId = this.categorySub[index].ID;
      this.pageIndex = 1;
      this.getGoodsListByCategorySubId();
    },

    // 上拉加载方法
    onLoad() {
      if (!this.finished) {
        this.getGoodsListByCategorySubId();
      }
    },
    // 下拉刷新
    onRefresh() {
      // setTimeout(() => {
      //   this.isRefresh = false
      //   this.finished = false
      //   this.list = []
      //   this.onLoad()
      // }, 500)
    },

    gotoGoodsDetail(goodsId) {
      this.$router.push(
        {
          path: 'goodsDetail',
          query: {
            goodsId
          }
        }
      )
    }
  }
}
</script>

<style scoped>
#leftNav {
  background-color: aliceblue;
}
#leftNav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e7ed;
  padding: 3px;
  font-size: 16px;
  text-align: center;
}
.categoryActice {
  background-color: #fff;
}
.list-item {
  font-size: 18px;
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
#list-div {
  overflow: scroll;
}
</style>
