import { shallowMount } from '@vue/test-utils';
import BgVideo from '@/components/BgVideo.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BgVideo, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
