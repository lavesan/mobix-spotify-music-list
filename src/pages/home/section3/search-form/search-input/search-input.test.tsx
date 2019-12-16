import { SearchInputComponent } from './index';
import renderer from 'react-test-renderer';

test('Tests search input snapshot ', () => {

    const component = renderer.create(
        SearchInputComponent({
            name: 'test',
            placeholder: 'Testando',
            onChange() {},
            value: '2',
            invalid: ''
        })
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})