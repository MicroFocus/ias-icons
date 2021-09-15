import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { NotificationService } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss'],
})
export class DetailedListComponent implements OnInit {
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

    copyIconName(template: TemplateRef<any>): void {
        navigator.clipboard.writeText(this.iconName);
        this.showNotification(template);
    }

    showNotification(template: TemplateRef<any>) {
        this.notificationService.show(
            template,
            { duration: this.duration, backgroundColor: this.backgroundColor },
            { description: this.description }
        );
    }

    downloadIconSVG(): void {
        console.log('Clicked Download Icon SVG');
    }
}
