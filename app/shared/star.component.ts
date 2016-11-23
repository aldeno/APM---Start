
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


//Every component must have a Component decorator
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    //Input decorator is used to pass value from the parent to child component
    @Input()
    rating: number;
    starWidth: number;
    //Output decorator is used to pass value back to the parent component
    //The Output property must return an event. 
    //The data that needs to be be passed back becomes a event payload -- in this example payload is string value of the EventEmitter object
    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    //On change is trigered when any of the component properties is changes
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
    //When the component is clicked rise ratingClicked event and set its payload
    onClick():void{
        this.ratingClicked.emit(`The radting ${this.rating} was clicked!`);
    }
}