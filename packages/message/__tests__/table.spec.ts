import { mount } from '@vue/test-utils'
import SumTable from '@cz-coco/message'

describe('@cz-coco/message', () => {
    it('create', () => {
        const wrapper = mount(SumTable)
        expect(wrapper.classes()).toContain('sum-table')
    })
})
