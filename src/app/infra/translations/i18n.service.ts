import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';

import { Logger } from '@app/infra/log/logger.service';


const log = new Logger('I18nService');
const languageKey = 'language';

export function extract(s: string) {
  return s;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(
    private translateService: TranslateService
  ) { }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => { localStorage.setItem(languageKey, event.lang); });
  }

  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = includes(this.supportedLanguages, language);

    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Idioma definido como ${language}`);

    this.translateService.use(language);
  }

  get language(): string {
    return this.translateService.currentLang;
  }

}
