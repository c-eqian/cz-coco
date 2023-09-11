import 'swiper/swiper-bundle.css';

import { useCreateComponentName } from '@cz-coco/hooks';
import { DeepPartial, useMerge } from 'co-utils-vue';
import { Swiper } from 'swiper';
import { Autoplay, EffectFade,Navigation, Pagination } from 'swiper/modules';
import { computed, defineComponent, h, nextTick, onMounted, onUpdated, PropType, ref, VNode, watchEffect } from 'vue';

import {CO_SWIPER_ITEM_NAME} from '../../swiperItem/types';
import { ISwiperProps } from '../types';

export default defineComponent({
    name: useCreateComponentName('swiperV2'),
    props: {
        config: {
            type: Object as PropType<DeepPartial<ISwiperProps>>,
            default: () => {
                return {
                    spaceBetween: 30,
                    centeredSlides: true,
                    /**
               * 渐隐渐现
               */
                    effect: 'slide',
                    /**
               * 指示器
               */
                    pagination: true,
                    /**
               * 方向
               */
                    direction: 'horizontal',
                    /**
               * 箭头切换
               */
                    navigation: true,
                    /**
               * 自动播放
               */
                    autoplay: {
                        delay: 100000,
                        disableOnInteraction: false,
                        /**
                   * 鼠标进入暂停
                   */
                        pauseOnMouseEnter: true
                    }
                };
            }
        }
    },
    components: {
        Swiper
    },
    setup(props, { slots }) {
        const modules = ref([Autoplay, Pagination, Navigation, EffectFade]);
        const _swiperConfig = computed(() => props.config);
        const _swiperDefault = ref({
            spaceBetween: _swiperConfig.value.spaceBetween,
            centeredSlides: true,
            /**
           * 渐隐渐现
           */
            effect: _swiperConfig.value.effect,
            /**
           * 方向
           */
            direction: _swiperConfig.value.direction,
            /**
           * 指示器
           */
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                // 分页器可以点击切换
                clickable: true
            },
            /**
           * 箭头切换
           */
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            /**
           * 加载模块
           */
            modules: modules.value,
            /**
           * 自动播放
           */
            autoplay: _swiperConfig.value.autoplay
        });
        const swiper = ref<Swiper | null>(null);
        const isShowSwiperButton = ref(_swiperConfig.value.navigation);
        const isShowSwiperPagination = ref(_swiperConfig.value.pagination);
        watchEffect(() => {
            _swiperDefault.value.spaceBetween = _swiperConfig.value.spaceBetween;
            _swiperDefault.value.effect = _swiperConfig.value.effect;
            _swiperDefault.value.autoplay = _swiperConfig.value.autoplay;
        });
        /**
     * 处理初始化配置
     */
        const swiperComputed = computed(() => useMerge({} as ISwiperProps, _swiperDefault.value));

        const initSwiper = () => {
            swiper.value = new Swiper('.swiper', swiperComputed.value);
            // 鼠标移出隐藏按钮，移入显示按钮
            swiper.value.el.onmouseover = function () {
                console.log(1111);
                console.log(swiper.value?.navigation.nextEl[0].classList);
                swiper.value?.navigation.nextEl[0].classList.remove('is-swiper-button-hide');
                console.log(swiper.value?.navigation.nextEl[0].classList);
                swiper.value?.navigation.prevEl[0].classList.remove('is-swiper-button-hide');
            };
            swiper.value.el.onmouseout = function () {
                swiper.value?.navigation.nextEl[0].classList.add('is-swiper-button-hide');
                swiper.value?.navigation.prevEl[0].classList.add('is-swiper-button-hide');
            };
            /**
         * 监听大小变化
         */
            swiper.value.on('resize', () => {
                swiper.value?.updateSize();
            });
            swiper.value.changeDirection(swiperComputed.value.direction);
        };
        onMounted(() => {
            // eslint-disable-next-line vue/valid-next-tick
            nextTick(() => {
                initSwiper();
            }).then();
        });
        onUpdated(() => {
            // eslint-disable-next-line vue/valid-next-tick
            nextTick(() => {
                swiper.value?.update();
            }).then();
        });
        return {
            swiperComputed,
            slots,
            swiper,
            isShowSwiperButton,
            isShowSwiperPagination
        };
    },
    render() {
        const { isShowSwiperPagination } = this;
        /**
         * 验证是否是有效VNode
         */
        const handleVerifyValidName = (name:string) => {
            return name === CO_SWIPER_ITEM_NAME;
        };
        const isShowSwiperButtonComputed = computed(() => this.isShowSwiperButton);
        /**
         * 处理默认插槽
         */
        const handleDefaultSlots = computed(() => {
            if (!this.slots.default) return null;
            const itemVNode: any[] = this.slots.default?.() || [];
            const vNodeList: VNode[] = [];
            if (Array.isArray(itemVNode[0].children)) {
                itemVNode[0].children.forEach((vNode:any) => {
                    if (handleVerifyValidName(vNode.type.name)) {
                        const _VNode = <div class="swiper-slide">
                            {vNode}
                        </div>;
                        vNodeList.push(_VNode);
                    }
                });
            }
            return vNodeList;
        });
        /**
         * 创建swiper基本框架
         */
        const initRender = (vNodeItem: VNode[]) => {
            return (
                // Slider main container
                <div class="swiper w-100% h-100%">
                    {/* Additional required wrapper */}
                    <div class="swiper-wrapper">
                        {vNodeItem}
                    </div>
                    {/* If we need pagination */}
                    {
                        isShowSwiperPagination && [
                            h('div', { class: 'swiper-pagination' })
                        ]
                    }
                    {isShowSwiperButtonComputed.value && [
                        h('div', { class: 'swiper-button-prev is-swiper-button-hide' }),
                        h('div', { class: 'swiper-button-next is-swiper-button-hide' })
                    ]}
                    {/* If we need scrollbar */}
                    {/* <div class="swiper-scrollbar"></div> */}
                </div>
            );
        };
        return (
            <div class="w-100% h-100%"
            >
                {initRender(handleDefaultSlots.value as any)}
            </div>

        );
    }
});
