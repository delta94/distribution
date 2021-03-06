import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  onShowModal?: () => void
}
class Main extends React.Component<Props> {
  render () {
    return (
      <img
        className={cx('qr-code')}
        src={require('client/assets/icon_erweima@3x.png')}
        onClick={() => {
          this.props.onShowModal()
        }}
      />
    )
  }
}
export default Main
