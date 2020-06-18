import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminComponent } from './admin.component';
import { OrderService } from 'src/app/services/order/order.service';
import { MockOrderService } from 'src/app/services/order/mockOrder';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      providers: [AdminComponent, {provide: OrderService, useClass: MockOrderService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of orders provided by service', () => {
    component.ngOnInit();
    expect(component.orderList.length).toBe(2);
  });

  it('should remove item from list when delete is clicked', () => {
    spyOn(component, 'deleteOrder');
    let button = fixture.debugElement.nativeElement.querySelector('.deleteOrder');
    button.click();
    expect(component.deleteOrder).toHaveBeenCalled();
  });

  it('should remove item from list', () => {
    const ordersFromStart = component.orderList.length;
    component.deleteOrder(2);
    expect(component.orderList.length).toBe(ordersFromStart - 1);

  });

});
