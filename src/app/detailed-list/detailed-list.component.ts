import { Component, Input, OnInit } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss'],
})
export class DetailedListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    iconName: null;

    constructor() {}

    ngOnInit(): void {}

    click(name) {
        this.iconName = name;
    }

    copyIconName(): void {
        console.log('Copied: ' + this.iconName);
        document.addEventListener('copy', (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', this.iconName);
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }

    downloadIconSVG(): void {
        console.log('Clicked Download Icon SVG');
    }
}
