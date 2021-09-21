import {
    Component,
    Input,
    OnInit,
    TemplateRef,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { NotificationService } from '@ux-aspects/ux-aspects';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HighlightService } from '../app.utils';

@Component({
    selector: 'app-tiled-list',
    templateUrl: './tiled-list.component.html',
    styleUrls: ['./tiled-list.component.scss'],
})
export class TiledListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    iconName: null;
    className: null;
    iconGlyph: null;

    duration: number = 6;
    backgroundColor = '#37c26a';
    description: string = 'Copied to clipboard!';

    modalRef: BsModalRef;

    constructor(
        public notificationService: NotificationService,
        private modalService: BsModalService,
        private highlightService: HighlightService
    ) {}

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }

    ngOnInit(): void {}

    click(name) {
        this.iconName = name;
    }

    copyIconName(template: TemplateRef<any>): void {
        navigator.clipboard.writeText(this.iconName);
        this.showNotification(template);
        this.modalRef.hide();
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
        this.modalRef.hide();
    }

    showDialog(template: TemplateRef<any>, className, name, glyph): void {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'iam-modal-dialog',
        });
        this.iconName = name;
        this.className = className;
        this.iconGlyph = glyph;
    }
}
