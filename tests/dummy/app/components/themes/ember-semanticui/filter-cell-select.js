import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../../templates/components/themes/ember-semanticui/filter-cell-select';

@templateLayout(layout)
export default class FilterCellSelectComponent extends Component {

  data = null;

  filterOptions = [''].concat(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']).map(option => ({
    value: option,
    label: option
  }))
  
}
