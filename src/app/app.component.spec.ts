import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderService } from './services/order/order.service';
import { MockOrderService } from './services/order/mockOrder';
import { NotFoundComponent } from './components/not-found/notFound/not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AdminComponent, { provide: OrderService, useClass: MockOrderService},
        NotFoundComponent,
      ],

      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

//   it(`should have as title 'last-project'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('last-project');
//   });

//   it('should render navbar', () => {
//     // logik för routing?
//   });
});
