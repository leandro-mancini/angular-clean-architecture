import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';

const languageKey = 'language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(
    private translate: TranslateService
  ) { }

  get language(): string {
    return this.translate.currentLang;
  }

  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translate.getBrowserCultureLang();

    let isSupportedLanguage = includes(this.supportedLanguages, language);

    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translate.use(language);
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

}
