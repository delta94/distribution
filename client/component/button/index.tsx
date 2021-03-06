import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props extends React.ButtonHTMLAttributes<any> {
  size?: 'large' | 'small'
  disabled?: boolean
}
class Main extends React.Component<Props> {
  el: any
  public componentDidMount () {
    this.el = this.refs.button
    this.el.addEventListener('touchstart', (e) => {
      if (!this.props.disabled) {
        e.preventDefault()
        this.el.className = `${this.el.className} ${cx('active')}`.replace(new RegExp(cx('active'), 'g'), cx('active'))
      }
    })
    this.el.addEventListener('touchend', (e) => {
      if (!this.props.disabled) {
        console.log('111')
        e.preventDefault()
        this.el.className = this.el.className.replace(RegExp(cx('active'), 'g'), '')
        if (this.props.onClick) {
          this.props.onClick(e)
        }
      }
    })
  }
  render () {
    return (
      <div
        ref='button'
        {...this.props}
        // onPointerDown={(e) => {
        //   e.preventDefault()
        //   this.el.className = `${this.el.className} ${cx('active')}`.replace(new RegExp(cx('active'), 'g'), cx('active'))
        // }}
        // onPointerUp={(e) => {
        //   console.log('pointer up')
        //   e.preventDefault()
        //   if (this.props.onClick) {
        //     // this.props.onClick(e)
        //   }
        //   this.el.className = this.el.className.replace(RegExp(cx('active'), 'g'), '')
        // }}
        onClick={(e) => {
          e.preventDefault()
          return
        }}
        className={
          cx('button', this.props.className, {active : this.props.disabled},
            cx({
              [this.props.size || 'small']: true
            }),
          )
        }
      >
        {this.props.children}
      </div>
    )
  }
}
export default Main
