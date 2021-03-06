import React from 'react'
import Button from 'client/component/button'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div className={cx('registry-success')}>
        <div className={cx('card-success')}>
          <div className={cx('title')}>注册成功</div>
          {/* <div className={cx('tips')}>为您生成专属二维码 欢迎加入噼里啪智能·财税</div> */}
          <div>
            <div className={cx('tips-title', 'mt15')}>说明：</div>
            <div className={cx('item', 'mt10')}>1. 去个人中心查看二维码。</div>
            <div className={cx('item')}>2. 可通过下载和点击分享二维码给其他人。</div>
          </div>
          <div>
            {/* <div className={cx('tips-title', 'mt15')}>奖励说明：</div>
            <div className={cx('item', 'mt10')}>1. 推荐一个有效客户，获取2000个积分，积分可以提现。</div>
            <div className={cx('item')}>
              <span>个人网址：http://www.pilipa.cn?id=12122</span>
              <img className={cx('down-img')} src={require('client/assets/icon_xiaz@3x.png')}/>
              <span className={cx('down')}>下载二维码</span>
            </div> */}
            {/* <div className={cx('text-center', 'mt25')}>
              <img className={cx('or-code')} src={this.props.user.qrCodeImageUrl}/>
            </div> */}
          </div>
          <div>
            <Button
              className='mt23'
              onClick={() => {
                // Toast.info('xxx')
                APP.history.push('/user')
              }}
            >
              进入我的个人中心
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)