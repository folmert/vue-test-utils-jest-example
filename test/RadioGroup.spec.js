import {mount} from 'vue-test-utils';
import RadioGroup from '@/components/RadioGroup';

describe('RadioGroup', () => {
    let wrapperDeep;

    beforeEach(() => {
        wrapperDeep = mount(RadioGroup, {});
    });

    // works
    it('changes data according to the changed folder data', () => {
        wrapperDeep.setData({folder: 'new'});
        expect(wrapperDeep.find('.selected').text()).toBe('Selected: new');

        wrapperDeep.setData({folder: 'existing'});
        expect(wrapperDeep.find('.selected').text()).toBe('Selected: existing');
    });

    // doesn't work
    it('changes data according to the selected folder option', () => {
        wrapperDeep.find('input[type="radio"][value="new"]').element.selected = true;
        expect(wrapperDeep.find('.selected').text()).toBe('Selected: new');

        wrapperDeep.find('input[type="radio"][value="existing"]').element.selected = true;
        expect(wrapperDeep.find('.selected').text()).toBe('Selected: existing');
    });
});