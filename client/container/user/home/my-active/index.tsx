import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import Tips from './Tips'
import * as Services from 'client/utils/service'
class Main extends React.Component {
  state = {
    activities: []
  }
  componentWillMount () {
    this.getActivities()
  }
  getActivities () {
    Services.getActivity().then((res) => {
      if (res.status === 200) {
        this.setState({
          activities: res.data
        })
      } else {
        APP.toast(res.message)
      }
    })
  }
  render () {
    return (
      <div
        className={cx('mt30')}
        onClick={() => {
          APP.history.push('/gift')
        }}
      >
        <Tips title='我的活动'/>
        {
          this.state.activities.length > 0 &&
          this.state.activities.map((item) => {
            return (
              <div className={cx('active-item')}>
              <div className={cx('con', 'clear', 'ml26')}>
                <div className={cx('mr20')}>
                  <span className={cx('eye', 'mr10')}></span>
                  <span>{item.browseVolume}</span>
                </div>
                <div>
                  <span>成交量：</span>
                  <span>{item.tradingVolume}/{item.customerVolume}</span>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    )
  }
}
export default Main
