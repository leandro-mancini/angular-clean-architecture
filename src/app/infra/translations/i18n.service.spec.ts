import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n.service';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject } from 'rxjs';

const defaultLanguage = 'pt-BR';
const supportedLanguages = ['pt-BR', 'en-US'];

class MockTranslateService {

  currentLang = '';
  onLangChange = new Subject();

  use(language: string) {
    this.currentLang = language;
    this.onLangChange.next({
      lang: this.currentLang,
      translations: {}
    });
  }

  getBrowserCultureLang() {
    return 'pt-BR';
  }

  setTranslation(lang: string, translations: Object, shouldMerge?: boolean) { }

}

describe('I18nService', () => {
  let i18nService: I18nService;
  let translateService: TranslateService;
  let onLangChangeSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        I18nService,
        { provide: TranslateService, useClass: MockTranslateService }
      ]
    });

    i18nService = TestBed.get(I18nService);
    translateService = TestBed.get(TranslateService);

    onLangChangeSpy = jasmine.createSpy('onLangChangeSpy');

    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      onLangChangeSpy(event.lang);
    });

    spyOn(translateService, 'use').and.callThrough();
  });

  afterEach(() => {
    localStorage.removeItem('language');
  });

  it('deve ser criado', () => {
    const service: I18nService = TestBed.get(I18nService);
    expect(service).toBeTruthy();
  });

  describe('init', () => {
    it('deve iniciar com o idioma padrão', () => {
      i18nService.init(defaultLanguage, supportedLanguages);

      expect(translateService.use).toHaveBeenCalledWith(defaultLanguage);
      expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
    });

    it('deve iniciar com salvar idioma', () => {
      const savedLanguage = 'pt-BR';
      localStorage.setItem('language', savedLanguage);

      i18nService.init(defaultLanguage, supportedLanguages);

      expect(translateService.use).toHaveBeenCalledWith(savedLanguage);
      expect(onLangChangeSpy).toHaveBeenCalledWith(savedLanguage);
    });
  });

  describe('Definir idioma', () => {
    it('deve mudar o idioma atual', () => {
      const newLanguage = 'en-US';
      i18nService.init(defaultLanguage, supportedLanguages);

      i18nService.language = newLanguage;

      expect(translateService.use).toHaveBeenCalledWith(newLanguage);
      expect(onLangChangeSpy).toHaveBeenCalledWith(newLanguage);
    });

    it('deve alterar o idioma atual para o padrão, se não for suportado', () => {
      const newLanguage = 'es';
      i18nService.init(defaultLanguage, supportedLanguages);

      i18nService.language = newLanguage;

      expect(translateService.use).toHaveBeenCalledWith(defaultLanguage);
      expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
    });
  });

  describe('obter linguagem', () => {
    it('deve retornar o idioma atual', () => {
      i18nService.init(defaultLanguage, supportedLanguages);

      const currentLanguage = i18nService.language;

      expect(currentLanguage).toEqual(defaultLanguage);
    });
  });
});
