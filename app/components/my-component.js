import Component from '@glimmer/component';

export default class MyComponent extends Component {
    get animals() {
        return this.args.animals.split(",")
    }
}
