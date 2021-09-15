import { Component, Input, OnInit } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { ColorService, NotificationService } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss'],
})
export class DetailedListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    iconName: null;

    duration: number = 2;
    description: string = 'Copied to clipboard!';

    constructor(
        public notificationService: NotificationService,
        public colorService: ColorService
    ) {}

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
