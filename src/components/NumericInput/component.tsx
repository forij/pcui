import Element, { NumericInputArgs } from './index';
import BaseComponent from '../Element/component';

/**
 * The NumericInput represents an input element that holds numbers.
 */
class Component extends BaseComponent <NumericInputArgs, any> {
    onValidate: (value: string) => boolean;

    constructor(props: NumericInputArgs) {
        super(props);
        this.elementClass = Element;

        if (props.onValidate) {
            this.onValidate = props.onValidate;
        }

        this.onAttach = this.onAttachFn.bind(this);
    }

    onAttachFn() {
        if (this.onValidate) {
            this.element.onValidate = this.onValidate;
        }
    }

    render() {
        return super.render();
    }
}

Component.ctor = Element;

export default Component;
