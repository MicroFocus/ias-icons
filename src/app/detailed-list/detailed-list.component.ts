import { Component, Input, OnInit } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss']
})
export class DetailedListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    constructor() {
    }

    ngOnInit(): void {
    }
}
