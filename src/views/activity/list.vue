<template>
  <div id="activity-list">
    <!-- 顶部下拉选框                     lj        -->
    <div class="top vux-1px-b">
      <span class="span">长沙</span>
    </div>
    <!-- 内容Tab切换 -->
    <div class="tab">
      <tab :line-width="3" custom-bar-width="80px">
        <tab-item selected>活动预告</tab-item>
        <tab-item>参加的活动</tab-item>
        <tab-item>活动进行时</tab-item>
      </tab>
    </div>
    <!-- 活动内容展示 -->
    <div class="content">
      <router-link to="/activity/details" class="item vux-1px-tb">
        <div class="logo">
          <img src="../../assets/activity-list/list-1.png" alt="">
          <div class="status processing">长沙</div>
          <div class="info">
            双十二大促销，快来抢购
          </div>
        </div>
        <p class="desc">12.12大酬宾，购买车险送1000积分。欢迎戳进来看看, 瞧一瞧，瞅一瞅。买不了吃亏，受不了上当。</p>
        <p class="time">2018.12.11-2018.12.15</p>
        <div class="handler">
          <span>敬请期待</span>
        </div>
      </router-link>
      <router-link to="/activity/details" class="item vux-1px-tb">
        <div class="logo">
          <img src="../../assets/activity-list/list-2.png" alt="">
          <div class="status processing">全省</div>
          <div class="info">
            双十一大促销，速来抢购
          </div>
        </div>
        <p class="desc">12.12大酬宾，购买车险送1000积分。欢迎戳进来看看, 瞧一瞧，瞅一瞅。买不了吃亏，受不了上当。</p>
        <p class="time">2018.12.11-2018.12.15</p>
        <div class="handler">
          <span>我要报名</span>
        </div>
      </router-link>
      <router-link to="/activity/details" class="item vux-1px-tb">
        <div class="logo">
          <img src="../../assets/activity-list/list-3.png" alt="">
          <div class="status expired">全省</div>
          <div class="info">
            团购享实惠,亲友欢乐多
          </div>
        </div>
        <p class="desc">12.12大酬宾，购买车险送1000积分。欢迎戳进来看看, 瞧一瞧，瞅一瞅。买不了吃亏，受不了上当。</p>
        <p class="time">2018.12.11-2018.12.15</p>
        <div class="handler">
          <span>去评价</span>
        </div>
      </router-link>
      <router-link to="/activity/details" class="item vux-1px-tb">
        <div class="logo">
          <img src="../../assets/activity-list/list-4.png" alt="">
          <div class="status expired">长沙</div>
          <div class="info">
            抽奖活动，好运连连来
          </div>
        </div>
        <p class="desc">12.12大酬宾，购买车险送1000积分。欢迎戳进来看看, 瞧一瞧，瞅一瞅。买不了吃亏，受不了上当。</p>
        <p class="time">2018.12.11-2018.12.15</p>
        <div class="handler">
          <span>去评价</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Selector, Tab, TabItem } from 'vux'

export default {
  name: 'activity-list',
  components: {
    Selector,
    Tab,
    TabItem
  },
  data () {
    return {
      defaultValue: 'cs',
      selector: [{
        key: 'cs',
        value: '长沙'
      }, {
        key: 'xt',
        value: '湘潭'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

#activity-list {
  // 顶部下拉选框
  .top {
    height: 40px;
    padding-left: @y;
    .span {
      position: relative;
      display: inline-block;
      font-size: @30;
      line-height: 44px;
      padding-right: 20px;
      &:before {
        content: " ";
        position: absolute;
        top: 50%;
        right: 0;
        width: 0; 
        height: 0; 
        border-left: 6px solid transparent; 
        border-right: 6px solid transparent; 
        border-top: 8px solid #b3b3b3;
      }
    }
  }
  // 内容tab切换
  .tab {
    .vux-tab .vux-tab-item {
      font-size: @30;
      background: #fff;
      background-size: 100% 100%;
      &.vux-tab-selected {
        color: @green;
      }
    }
  }
  // 内容展示
  .content {
    .item {
      display: block;
      margin-bottom: @y; 
      padding: @y @x 14px;
      background-color: #fff;
      .logo {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        margin-bottom: 6px;
        overflow: hidden;
        > img {
          width: 100%;
        }
        .status {
          position: absolute;
          top: 0;
          right: 0;
          width: 55px;
          height: 20px;
          text-align: center;
          font-size: @24;
          color: #fff;
          &.processing {
            background: url(../../assets/activity-processing-bg.png) no-repeat center center;
            background-size: 100% 100%;
          }
          &.expired {
            background: url(../../assets/activity-list/expired.png) no-repeat center center;
            background-size: 100% 100%;
          }
        }
        .info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          padding: 0 10px;
          font-size: @24;
          line-height: 30px;
          overflow: hidden;
          color: #fff;
          background: rgba(0, 0, 0, 0.3);
        }
      }
      .desc {
        line-height: 20px;
      }
      .time {
        font-size: @24;
        color: #b3b3b3;
      }
      .handler {
        text-align: right;
        span {
          display: inline-block;
          width: 48px;
          padding: 0 10px;
          height: 24px;
          line-height: 24px;
          border-radius: 6px;
          font-size: @24;
          text-align: center;
          color: #fff;
          background-color: #009b63;
        }
      }
    }
  }
}
</style>
