import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GridFilteringService } from './services/grid-filtering.service';
import { formatCurrency } from '@angular/common';
import {
  IgxCellTemplateDirective,
  IgxColumnComponent,
  IgxGridComponent,
  IgxGridToolbarComponent,
} from 'igniteui-angular';

@Component({
  selector: 'app-grid-filtering',
  imports: [
    IgxGridComponent,
    IgxColumnComponent,
    IgxCellTemplateDirective,
    IgxGridToolbarComponent,
    IgxGridComponent,
  ],
  templateUrl: './grid-filtering.component.html',
  styleUrl: './grid-filtering.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridFilteringComponent {
  private readonly gridFilteringService = inject(GridFilteringService);

  data = this.gridFilteringService.filterData;
  public formatCurrency(val: string) {
    return '$' + parseInt(val, 10).toFixed(2);
  }
}
