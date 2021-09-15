import { Component, Input, OnInit } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { NotificationService } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-tiled-list',
    templateUrl: './tiled-list.component.html',
    styleUrls: ['./tiled-list.component.scss'],
})
export class TiledListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    iconName: null;

    duration: number = 2;
    backgroundColor = '#37c26a';
    description: string = 'Copied to clipboard!';

    constructor(public notificationService: NotificationService) {}

    ngOnInit(): void {}

    click(name) {
        this.iconName = name;
    }

    copyIconName(): void {
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
