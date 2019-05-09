import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Title } from '@angular/platform-browser';

import { I18nService } from '@app/infra/translations/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor(
    private titleService: Title,
    private i18nService: I18nService
  ) { }

  ngOnInit() {
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

}
