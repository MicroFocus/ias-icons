import { Component, Input, OnInit } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tiled-list',
    templateUrl: './tiled-list.component.html',
    styleUrls: ['./tiled-list.component.scss']
})
export class TiledListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    constructor() {
    }

    ngOnInit(): void {
    }

}
