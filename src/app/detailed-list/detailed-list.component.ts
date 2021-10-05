import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IconInfo } from '../../common/types/icon-info.type';
import { Observable } from 'rxjs';
import { NotificationService } from '@ux-aspects/ux-aspects';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HighlightService } from '../app.utils';

@Component({
    selector: 'app-detailed-list',
    templateUrl: './detailed-list.component.html',
    styleUrls: ['./detailed-list.component.scss'],
})
export class DetailedListComponent implements OnInit {
    @Input() iconInfoList$: Observable<IconInfo[]>;

    modalRef: BsModalRef;

    iconName: string = null;
    className: string = null;
    iconGlyph: string = null;
    iconUses: string = null;
    iconNotes: string = null;
    iconSVGFileName: string = null;
    fileUrl: string = null;
    duration: number = 6;
    backgroundColor = '#37c26a';
    description: string = 'Copied to clipboard!';

    constructor(
        public notificationService: NotificationService,
        private modalService: BsModalService,
        private highlightService: HighlightService
    ) {}

    ngOnInit(): void {}

    copyClassName(template: TemplateRef<any>): void {
        navigator.clipboard.writeText(this.className);
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
        this.fileUrl =
            'https://github.com/MicroFocus/ias-icons/blob/master/icons/' +
            this.iconSVGFileName;
        window.open(this.fileUrl);
        this.modalRef.hide();
    }

    showDialog(
        template: TemplateRef<any>,
        className,
        name,
        glyph,
        uses,
        notes
    ): void {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'iam-modal-dialog',
        });
        this.iconName = name;
        this.className = className;
        this.iconGlyph = glyph;
        this.iconUses = uses;
        this.iconNotes = notes;

        var iconGlyph = this.iconGlyph.slice(1);
        this.iconSVGFileName = 'u' + iconGlyph + '-' + this.iconName + '.svg';

        // TODO: Hack-y way to do this. Figure out how to do it differently
        setTimeout(() => {
            this.highlightService.highlightAll();
        }, 100);
    }
}
