<template>
  <div id="activity-details">
    <!-- 头部图片 -->
    <div class="top">
      <img src="../../assets/activity-list/details-1.png" alt="">
    </div>
    <!-- 文字内容 -->
    <div class="content vux-1px-tb">
      <h2>双十二大促销，快来抢购</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;12.12大酬宾，购买车险送1000积分。欢迎戳进来看看瞧一瞧，瞅一瞅。买不了吃亏，受不了上当</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;双十二最早由天猫（最早称淘宝商城）于2009年.12.12日发起，最初的出发点只是想做一个属于淘宝商城的节日</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;“双十二”即指每年的11月11日，是指由电子商务为代表的，在全国范围内兴起的大型购物促销节日。自从2009年10
        月1日和中秋节双节通过开始。每年的12月12日，以天猫、京东、苏宁易购为代表的大型电子商务网站一般会利用这一....</p>
      <p>报名时间：2018.12.11　23:59:59 副本</p>
      <h3>说明</h3>
      <p class="explain">1.仅在活动时间范围内参与该活动；</p>
      <p class="explain">2.该活动不与其他活动同时进行；</p>
      <p class="explain">3.仅在活动时间范围内参与该活动。</p>
    </div>
    <!-- 评价 -->
    <div class="evaluate vux-1px-t">
      <div class="head vux-1px-b">
        <h2>客户评价</h2>
      </div>
      <div class="stairs">
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block vux-1px-b">
          <div class="information">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <div class="tell">
                134****9742
                <span>2018.12.15</span>
                </div>
              <div class="star">
                <rater v-model="star" :font-size="18"></rater>
              </div>
              <div class="tip">
                <span class="vux-1px">很好</span>
                <span class="vux-1px">很实惠</span>
                <span class="vux-1px">下次还会参加</span>
              </div>
            </div>
          </div>
        </div>                                        
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="footer">
      <div class="left">活动已结束</div>
      <div class="right">写评价</div>
    </div>
  </div>
</template>

<script>
import { Rater, Group, Cell } from 'vux'

export default {
  name: 'activity-details',
  components: {
    Rater,
    Group,
    Cell
  },
  data () {
    return {
      star: 3
    }
  }
}
</script>

<style lang="less">
@import '../../style/global.less';
@import '~vux/src/styles/1px.less';

#activity-details {
  // 头部图片样式
  .top {
    display: flex;
    align-items: center;
    justify-content: center;    
    height: 148px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  // 中间文字内容
  .content {
    padding: 0 @x @x;
    background-color: #fff;
    h2 {
      height: 37px;
      line-height: 37px;
      font-size: @36;
      color: @deepBlack;
    }
    p {
      font-size: @26;
      margin-top: 5px;
      line-height: 17px;
      color: @black;
    }
    h3 {
      height: 24px;
      line-height: 24px;
      margin-top: 10px;
      color: @deepBlack;

    }
    .explain {
      margin-top: 0;
      line-height: 24px;
    }
  }
  // 评论
  .evaluate {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    .head {
      margin: 0 @x;
      h2 {
        height: 23px;
        line-height: 23px;
        padding-top: 5px;
        font-size: @28;
        color: #000;        
      }
    }
    .stairs {
      .block {
        height: 77px;
        .information{
          display: flex;
          margin-top: 10px;
          padding: 0 @x;   
          .left {
            flex: 0 0 40px;
            height: 40px;
            border-radius: 40px;
            border: 1px solid #cccccc;
          }
          .right {
            flex: 1;
            margin-left: 4px;
            .tell {
              line-height: 20px;
              font-size: @26;
              color: @black;
              span {
                font-size: @24;
                float: right;
                color: @gray;
              }
            }
            .star {
              // 覆盖vux样式
              .flex-direction{
                display: none;
                span {
                  font-size: @28;
                }
              }
            }
            .tip {
              .vux-1px::before {
                border-color: @green;
                border-radius: 4px;
              }
              span {
                height: 17px;
                line-height: 17px;
                padding: 0 5px;
                box-sizing: border-box;
                color: @green;
              }
            }
          }
        }
      }
    }
  }
  // 底部按钮
  .footer {
    display: flex;    
    width: 100%;
    height: 50px;
    position: fixed;
    box-sizing: border-box;
    bottom: 0px;
    .left {
      flex: 27;
      line-height: 50px;
      background-color: @lightGray;
      color: #8f8f8f;
      text-align: center;
    }
    .right {
      flex: 48;
      line-height: 50px;
      background-color: @green;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>

