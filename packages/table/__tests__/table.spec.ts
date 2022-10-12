import { mount } from '@vue/test-utils'
import SumTable from '@cz-coco/table'

describe('@cz-coco/table', () => {
    it('create', () => {
        const wrapper = mount(SumTable)
        expect(wrapper.classes()).toContain('sum-table')
    })
})
