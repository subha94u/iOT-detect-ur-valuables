import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarChartComponent } from './chartbar-chart.component';

describe('ChartbarChartComponent', () => {
  let component: ChartbarChartComponent;
  let fixture: ComponentFixture<ChartbarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
