
export interface ISwiperProps {
 spaceBetween: number;
 centeredSlides: boolean;
 /**
  * 渐隐渐现
  */
 effect: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' | string;
 /**
  * 指示器
  */
 pagination: boolean;
 /**
  * 箭头切换
  */
 navigation: boolean;
 /**
  * 方向
  */
 direction: 'vertical' | 'horizontal';
 /**
  * 自动播放
  */
 autoplay:{
  delay: number;
  /**
   * 禁止交互
   */
  disableOnInteraction: boolean;
  /**
   * 鼠标进入暂停
   */
  pauseOnMouseEnter: boolean;
 };
}