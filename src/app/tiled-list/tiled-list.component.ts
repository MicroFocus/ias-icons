import {
    Component,
    Input,
    OnInit,
    TemplateRef,
    EventEmitter,
} from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { NotificationService } from '@ux-aspects/ux-aspects';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-tiled-list',
    templateUrl: './tiled-list.component.html',
    styleUrls: ['./tiled-list.component.scss'],
})
export class TiledListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    iconName: null;

    duration: number = 0;
    backgroundColor = '#37c26a';
    description: string = 'Copied to clipboard!';

    modalRef: BsModalRef;

    constructor(
        public notificationService: NotificationService,
        private modalService: BsModalService
    ) {}

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

    showDialog(template: TemplateRef<any>, iconInfo): void {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'iam-modal-dialog',
        });
        console.log(iconInfo)
    }
}
