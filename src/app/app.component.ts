import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconInfo } from '../common/types/icon-info.type';
import { FormControl } from '@angular/forms';
import {
    BehaviorSubject,
    combineLatest,
    Observable,
    of,
    Subscription,
} from 'rxjs';
import {
    debounce,
    debounceTime,
    map,
    startWith,
    tap,
    withLatestFrom,
} from 'rxjs/operators';

const FULL_ICON_LIST = require('../../dist/generated-font/dist/ias-icons.json');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    searchFormControl = new FormControl('');

    iconInfoList: BehaviorSubject<IconInfo[]> = new BehaviorSubject<IconInfo[]>(
        []
    );
    iconInfoListSubscription: Subscription;

    showDetailedList: boolean;

    ngOnInit(): void {
        this.iconInfoListSubscription = this.subscribeToIconInfoListChanges();
    }

    ngOnDestroy(): void {
        this.iconInfoListSubscription.unsubscribe();
    }

    onTileViewClicked(): void {
        this.showDetailedList = false;
    }

    onListViewClicked(): void {
        this.showDetailedList = true;
    }

    private subscribeToIconInfoListChanges(): Subscription {
        return combineLatest([
            of(FULL_ICON_LIST).pipe(
                map((icons: IconInfo[]) => {
                    return icons.sort((a: IconInfo, b: IconInfo) =>
                        a.glyph.localeCompare(b.glyph)
                    );
                })
            ),
            this.searchFormControl.valueChanges.pipe(
                debounceTime(200),
                startWith('')
            ),
        ])
            .pipe(
                map(([icons, search]) => {
                    if (search) {
                        return icons.filter((icon: IconInfo) => {
                            return icon.name.indexOf(search) > -1;
                        });
                    }

                    return icons;
                })
            )
            .subscribe(this.iconInfoList); // Keep a hold of the latest value in this BehaviorSubject
    }

    onClearSearchClicked(): void {
        this.searchFormControl.setValue('');
    }
}
