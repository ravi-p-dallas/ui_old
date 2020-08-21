import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'ActionButtonsSwitch' })
export default class ActionButtonsSwitch extends VuexModule {
    private aComponent = 'Home';

    @Mutation
    private setActiveComponent(cName: string) {
        this.aComponent = cName;
    }

    @Action
    public changeComponent(cName: string) {
        this.context.commit('setActiveComponent', cName);
    }

    public get activeComponent() {
        return this.aComponent;
    }
}
