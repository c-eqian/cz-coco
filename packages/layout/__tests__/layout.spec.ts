import { mount } from '@vue/test-utils'
import SumLayout from '@cz-coco/layout'

describe('@cz-coco/layout', () => {
    it('create', () => {
        const wrapper = mount(SumLayout)
        expect(wrapper.classes()).toContain('sum-layout')
    })
})
