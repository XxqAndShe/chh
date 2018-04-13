<template>
  <div id="index">
    <!-- 卡片 -->
    <div class="card">
      <div class="top vux-1px-b">
        <div class="left">
          <img width="60" height="60" src="" alt="">
        </div>
        <div class="right">
          <h2>中国人寿</h2>
          <p>186****1811</p>
          <div>
            <router-link class="valid" to="/">会员验真</router-link>
            <router-link class="valid" to="/">代理人验真</router-link>
          </div>
        </div>
      </div>
      <div class="bottom">
        中国人寿财险湖南分公司
      </div>
    </div>

    <!-- 代理人 -->
    <div class="agent block vux-1px-tb">
      <div class="head">
        <span>代理人中心</span>
      </div>
      <div class="content">
        <div class="statistics">
          <div>
            <div class="name">预计收益（元）</div>
            <div class="number">12250.2</div>
          </div>
          <div>
            <div class="name">团队（人）</div>
            <div class="number">156</div>
          </div>
        </div>
        <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/" label="我的团队">
            <img slot="icon" src="../assets/agent-1.png">
          </grid-item>
          <grid-item link="/" label="推广二维码">
            <img slot="icon" src="../assets/agent-2.png">
          </grid-item>
          <grid-item link="/" label="个人业绩">
            <img slot="icon" src="../assets/agent-3.png">
          </grid-item>
          <grid-item link="/" label="团队业绩">
            <img slot="icon" src="../assets/agent-4.png">
          </grid-item>
          <grid-item link="/" label="预计收益">
            <img slot="icon" src="../assets/agent-5.png">
          </grid-item>
          <grid-item link="/" label="我要结算">
            <img slot="icon" src="../assets/agent-6.png">
          </grid-item>
          <grid-item link="/" label="设置">
            <img slot="icon" src="../assets/agent-7.png">
          </grid-item>
        </grid>
      </div>
    </div>

    <!-- 增值服务 -->
    <div class="valueAdded block vux-1px-tb">
      <div class="head">
        <span>增值服务</span>
      </div>
      <div class="content">
        <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/" label="车辆清洗">
            <img slot="icon" src="../assets/valueAdded-1.png">
          </grid-item>
          <grid-item link="/" label="钣金喷漆">
            <img slot="icon" src="../assets/valueAdded-2.png">
          </grid-item>
          <grid-item link="/" label="车辆年审">
            <img slot="icon" src="../assets/valueAdded-3.png">
          </grid-item>
          <grid-item link="/" label="违章查询">
            <img slot="icon" src="../assets/valueAdded-4.png">
          </grid-item>
          <grid-item link="/" label="安全检测">
            <img slot="icon" src="../assets/valueAdded-5.png">
          </grid-item>
          <grid-item link="/" label="代驾服务">
            <img slot="icon" src="../assets/valueAdded-6.png">
          </grid-item>
          <grid-item link="/" label="道路救援">
            <img slot="icon" src="../assets/valueAdded-7.png">
          </grid-item>
          <grid-item link="/" label="更多">
            <img slot="icon" src="../assets/valueAdded-8.png">
          </grid-item>
        </grid>
      </div>
    </div>

    <!-- 会员 -->
    <div class="menber block vux-1px-tb">
      <div class="head">
        <span>会员服务</span>
      </div>
      <div class="content">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/2">
            <router-link to="/" class="item vux-1px-b">
              <img width="40" height="40" src="../assets/menber-1.png" alt="">
              <span>我的卡包</span>
            </router-link>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <router-link to="/" class="item vux-1px-b">
              <img width="40" height="40" src="../assets/menber-2.png" alt="">
              <span>我的活动</span>
            </router-link>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <router-link to="/" class="item">
              <img width="40" height="40" src="../assets/menber-3.png" alt="">
              <span>保单信息查询</span>
            </router-link>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <router-link to="/" class="item">
              <img width="40" height="40" src="../assets/menber-4.png" alt="">
              <span>理赔进度查询</span>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>
    </div>

    <!-- 活动 -->
    <div class="activity block vux-1px-tb">
      <div class="head">
        <span>活动中心</span>
        <router-link class="more" to="/">更多<x-icon type="ios-arrow-forward" size="20"></x-icon></router-link>
      </div>
      <div class="content">
        <router-link to="/activity/list" class="item">
          <div class="logo">
            <img src="../assets/activity-1.png" alt="">
            <div class="status processing">长沙</div>
            <div class="info">
              双12大促
            </div>
          </div>
          <p class="desc">12.12大酬宾，购买车险送1000积分。欢迎戳进来看看, 瞧一瞧，瞅一瞅。买不了吃亏，受不了上当。</p>
          <p class="time">2018.12.11-2018.12.15</p>
          <div class="handler">
            <span>我要报名</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, Flexbox, FlexboxItem } from 'vux'

export default {
  name: 'index',
  components: {
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less">
@import '../style/mixin.less';

#index {
  // 公用
  .block {
    margin-bottom: 10px;
    background-color: #fff;
    .head {
      position: relative;
      padding-left: 7px;
      margin: 0 @x 6px;
      height: 34px;
      line-height: 34px;
      color: @deepBlack;
      &:before {
        content: ' ';
        position: absolute;
        width: 2px;
        height: 14px;
        left: 0;
        top: 50%;
        margin-top: -7px;
        background: linear-gradient(top, #1deb55, #009b63);
      }
      .more {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        color: @lightBlack;
        > .vux-x-icon {
          fill: @gray;
        }
      }
    }
    .content {
      margin: 0 @x;
    }
  }

  // 卡片
  .card {
    margin: @x @x 18px @x;
    border-radius: 10px;
    background: linear-gradient(left, #d5ab7f, #e8cba8);
    box-shadow: 0 2px 15px #e5d0ba;
    .top {
      display: flex;
      align-items: center;
      height: 108px;
      &.vux-1px-b:after {
        border-color: #ffe1bb;
      }
      .left {
        margin-right: 10px;
        margin-left: 20px;
        border-radius: 50%;
        background: #fff;
      }
      .right {
        flex: 1;
        margin-right: 16px;
        color: #fff;
        background: url(../assets/card-logo.png) no-repeat center right;
        background-size: auto 100%;
        h2 {
          font-size: @28;
        }
        p {
          margin-bottom: 6px;
          font-size: @24;
        }
        .valid {
          display: inline-block;
          height: 24px;
          padding: 0 10px;
          margin-right: 10px;
          line-height: 24px;
          border-radius: 12px;
          font-size: @24;
          color: #fff;
          background: #d5aa7e;
        }
      }
    }
    .bottom {
      height: 32px;
      padding-right: 15px;
      font-size: @24;
      line-height: 32px;
      text-align: right;
      color: #fff;
    }
  }

  // 代理人
  .agent {
    padding-bottom: 14px;
    .weui-grids:before {
      display: none;
    }
    .weui-grid:after {
      display: none;
    }
    .weui-grid__icon {
      width: 32px;
      height: 32px;
    }
    .weui-grid__label {
      font-size: @26;
    }
    .weui-grid {
      padding: 2px 0;
    }
    .statistics {
      display: flex;
      height: 60px;
      margin: 0 0 18px;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        &:first-child {
          margin-right: 15px;
        }
        box-shadow: 0 0 10px #f4f4f4;
        border-radius: 6px;
      }
      .name {
        position: relative;
        text-indent: 24px;
        font-size: @24;
        &:before {
          content: ' ';
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          left: 10px;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          border: 2px solid @yellow;
          border-radius: 50%;
        }
      }
      .number {
        font-size: @36;
        text-align: center;
        font-weight: bold;
        color: @yellow;
      }
    }
  }

  // 增值服务
  .valueAdded {
    padding-bottom: 14px;
    .weui-grids:before {
      display: none;
    }
    .weui-grid:after {
      display: none;
    }
    .weui-grid__icon {
      width: 32px;
      height: 32px;
    }
    .weui-grid__label {
      font-size: @26;
    }
    .weui-grid {
      padding: 2px 0;
    }
  }

  // 会员
  .menber {
    padding-bottom: 4px;
    .item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      &:active {
        background-color: #ECECEC;
      }
      > img {
        margin-right: 10px;
      }
    }
  }

  // 活动
  .activity {
    padding-bottom: 14px;
    .item {
      display: block;
    }
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
          background: url(../assets/activity-processing-bg.png) no-repeat center center;
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
        padding: 0 10px;
        height: 24px;
        line-height: 24px;
        border-radius: 6px;
        font-size: @24;
        color: #fff;
        background-color: #009b63;
      }
    }
  }
}
</style>
