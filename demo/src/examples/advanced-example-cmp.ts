import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IPaginationInstance} from '../../../src/ng2-pagination';

@Component({
    selector: 'advanced-example',
    templateUrl: './advanced-example-cmp.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class AdvancedExampleCmp {
 
    @Input('data') meals: string[] = [];

    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: IPaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

    private popped = [];

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.meals.push(item);
    }

    popItem() {
        this.popped.push(this.meals.pop());
    }
}