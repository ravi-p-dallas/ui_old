import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store'

@Module({ dynamic: true, store, name: 'CountryFlip' })
export default class CountryFlip extends VuexModule {
    private countryName = 'INDIA';
    private visualsClasses = {
        'INDIA': {
            'fCclass': 'ma-2 white--text font-weight-bold orange darken-1',
            'bCclass': 'ma-2 green--text font-weight-bold white darken-1',
            'sMclass': 'ma-2 white--text font-weight-bold green darken-1',
            'overlay': 'linear-gradient(45deg,#2a4ae4B3,#fb949eB3)',
            'name': 'INDIA'
        },
        'USA': {
            'fCclass': 'ma-2 white--text font-weight-bold red darken-1',
            'bCclass': 'ma-2 blue--text font-weight-bold white darken-1',
            'sMclass': 'ma-2 white--text font-weight-bold blue darken-1',
            'overlay': 'linear-gradient(45deg,#aed581B3,#b3e5fcB3)',
            'name': 'USA'
        },
        'SINGAPORE': {
            'fCclass': 'ma-2 white--text font-weight-bold red lighten-1',
            'bCclass': 'ma-2 white--text font-weight-bold red lighten-1',
            'sMclass': 'ma-2 red--text font-weight-bold white darken-1',
            'overlay': 'linear-gradient(45deg,#ffcc80B3,#fb949eB3)',
            'name': 'SINGAPORE'
        },
        'CANADA': {
            'fCclass': 'ma-2 white--text font-weight-bold red lighten-1',
            'bCclass': 'ma-2 white--text font-weight-bold red lighten-1',
            'sMclass': 'ma-2 red--text font-weight-bold white darken-1',
            'overlay': 'linear-gradient(45deg, #30e8bfB3,#ff8235B3)',
            'name': 'CANADA'
        },
        'MALAYSIA': {
            'fCclass': 'ma-2 white--text font-weight-bold red lighten-1',
            'bCclass': 'ma-2 blue--text font-weight-bold white lighten-1',
            'sMclass': 'ma-2 white--text font-weight-bold blue darken-1',
            'overlay': 'linear-gradient(45deg, #ffd89bB3, #19547bB3)',
            'name': 'MALAYSIA'
        }
    };

    @Mutation
    private updateCountry(payload: string) {
        this.countryName = payload;
        console.log(': Country Change Mutation');
    }

    public get country() {
        console.log(': Country Get');
        return this.countryName;
    }

    public get visualStyle() {
        console.log(': VisualStyle Get', this.visualsClasses[this.countryName]);
        return this.visualsClasses[this.countryName];
    }

    @Action
    public changeCountry(country: string) {
        this.context.commit('updateCountry', country);
        console.log(': Country Change Action');
    }
}
