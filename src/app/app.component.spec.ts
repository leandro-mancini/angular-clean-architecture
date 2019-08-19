import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { I18nService } from './infra/translations/i18n.service';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent:', () => {
  let i18nService: I18nService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        I18nService
      ]
    }).compileComponents();

    i18nService = TestBed.get(I18nService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o aplicativo', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar o setup translations', () => {
    component.ngOnInit();

    const defaultLanguage = 'pt_BR';
    const supportedLanguages = ['pt_BR'];

    i18nService.init(defaultLanguage, supportedLanguages);
  });
});
