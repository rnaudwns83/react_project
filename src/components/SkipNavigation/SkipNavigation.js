import React, { Fragment, useCallback, useMemo } from 'react';
import './SkipNavigationStyles.css';
import { NavLink } from 'react-router-dom';



const skipMain = [
  { text: '상단메뉴 바로가기', value: 'Gnb' },
  { text: '본문 바로가기', value: 'Container' },
  { text: '하단메뉴 바로가기', value: 'Footer' },
]

const SkipNavigation = ({ mode = 'basic' }) => {
  const handleClick = useCallback((value) => (e) => {
    e.preventDefault();
    // if (IS_BROWSER) utils.scrollTo({ top: document.querySelector(`#${value}`).getBoundingClientRect().top });
    document.querySelector(`#${value} a`).focus();
  }, [])

  const getSkip = useMemo(() => {
    if (mode === 'basic') {
      return (
        <Fragment>
          {skipMain.map((skip, key) => 
            <NavLink to={`#${skip.value}`} key={key} onClick={handleClick(skip.value)}>
              {skip.text}
            </NavLink>)
          }
        </Fragment>
      )
    }
  }, [handleClick, mode])

  return (
      <div className='SkipNavigationWrap'>
       {getSkip}
      </div>
  )
}

export default SkipNavigation;