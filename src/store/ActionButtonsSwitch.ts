import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'

@Module({dynamic: true, store, name: 'ActionButtonsSwitch'})
export default class ActionButtonsSwitch extends VuexModule {
  activeComponent = '';

  @Mutation
  setComponent(payload: string) {
    this.activeComponent = payload;
  }

  @Action
  changeComponent(cName: string) {
    this.context.commit('setCountry', cName);
  }
}
