import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class MyParentComponentComponent extends Component {
    @tracked
    animals = "puppies, kitties, cthulhu"

    @action
    updateAnimals(e) {
        // TODO: wtf is this not working?
        this.animals = e.target.outerHTML
    }
}
