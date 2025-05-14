import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
   const { t } = useTranslation();
  const activeFilter = 'invert(78%) sepia(24%) saturate(1531%) hue-rotate(124deg) brightness(85%) contrast(100%)';
  const activeColor = '#15d5c7';

  return (

    <div class="uni-body pages-index-index">

      <uni-app class="uni-app--showtabbar uni-app--maxwidth">


        <uni-tabbar
          class="uni-tabbar-bottom" >
          <div class="uni-tabbar" style={{ backgroundColor: '#fff', backdropFilter: 'none',width: '100%' }}>
            <div class="uni-tabbar-border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}></div>
            <div class="uni-tabbar__item">
            <Link to="/dashboard"style={{ textDecoration: "none", color: "inherit",cursor: "none"  }}>
                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                  <img
                      src="/static/tabbar/home.png"
                      style={{
                        filter: currentPath === '/dashboard' ? activeFilter : 'brightness(0) invert(0)',
                      }}
                      alt="Home"
                    />
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/dashboard' ? '#15d5c7' : '#000',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Home')} </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/trade"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                  <img
                      src="/static/tabbar/trade.png"
                      style={{
                        filter: currentPath === '/trade' ? activeFilter : 'brightness(0) invert(0)',
                      }}
                      alt="Trade"
                    />
                    
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/trade' ? '#15d5c7' : '#000',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Trade')} </div>
                </div>
                </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/assets"style={{ textDecoration: "none", color: "inherit", cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                    
                  <img
                      src="/static/tabbar/assets.png"
                      style={{
                        filter: currentPath === '/assets' ? activeFilter : 'brightness(0) invert(0)',
                      }}
                      alt="Assets"
                    />
                    
                    
                    </div>
                  <div  className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/assets' ? '#15d5c7' : '#000',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Assets')} </div>
                </div>
              </Link>
            </div>
            <div class="uni-tabbar__item">
            <Link to="/server"style={{ textDecoration: "none", color: "inherit",cursor: "none" }}>

                <div class="uni-tabbar__bd" style={{ height: '65px' }}>
                  <div class="uni-tabbar__icon" style={{ width: '24px', height: '24px' }}>
                    
                    
                  <img
                      src="/static/tabbar/server.png"
                      style={{
                        filter: currentPath === '/server' ? activeFilter : 'brightness(0) invert(0)',
                      }}
                      alt="Server"
                    />
                    
                    </div>
                  <div className="uni-tabbar__label"
                    style={{
                      color:
                        currentPath === '/server' ? '#15d5c7' : '#000',
                      fontSize: '13px',
                      lineHeight: 'normal',
                      marginTop: '3px',
                    }}>
                    {t('Server')} </div>
                </div>
              </Link>
            </div>
          </div>  
          <div class="uni-placeholder" style={{ height: '65px' }}></div>
        </uni-tabbar>
      </uni-app>
    </div>  
  );
}