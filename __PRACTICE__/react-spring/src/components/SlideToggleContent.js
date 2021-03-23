import { useTransition, animated } from 'react-spring'
import React from 'react'

const visibleStyle = { opacity: 1 }
const hiddenStyle = { opacity: 0 }

export const SlideToggleContent = ({ isVisible, children, ...restProps }) => {
  const transition = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      await next(visibleStyle)
    },
    leave: () => async (next, calcel) => {
      await next(hiddenStyle)
    },
    from: isVisible ? visibleStyle : hiddenStyle,
  })

  return transition.map(({ item: show, prop: toggleStyle, key }) =>
    // 여기서 열고 닫을 떄 애니메이션이 적용되고 닫을 수 있도록 하는가?
    show ? (
      <animated.div prop={toggleStyle} key={key} {...restProps}>
        {children}
      </animated.div>
    ) : null
  )
}
