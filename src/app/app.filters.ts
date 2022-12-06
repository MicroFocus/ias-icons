import { userInfo } from "os";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconInfo } from '../common/types/icon-info.type';
import { FormControl } from '@angular/forms';
import { NgAnalyzeModulesHost } from "@angular/compiler";

export class SearchFiltersService {
    private filters: any [];
    constructor () {
        this.filters = [
            {
                name: "User",
            },
            {
                name: "Server",
            },
            {
                name: "Status",
            },
            {
                name: "Cyber",
            },
            {
                name: "System",
            }
        ];
    }
    getFilters () {
        return this.filters;
    }
}