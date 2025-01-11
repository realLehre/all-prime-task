import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IgxCellTemplateDirective,
  IgxColumnComponent,
  IgxGridComponent,
  IgxLinearProgressBarComponent,
  IgxPaginatorComponent,
} from 'igniteui-angular';
import { DecimalPipe } from '@angular/common';
import { GridPagingService } from './services/grid-paging.service';

@Component({
  selector: 'app-grid-paging',
  imports: [
    IgxGridComponent,
    IgxColumnComponent,
    IgxPaginatorComponent,
    DecimalPipe,
    IgxCellTemplateDirective,
    IgxLinearProgressBarComponent,
  ],
  templateUrl: './grid-paging.component.html',
  styleUrl: './grid-paging.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPagingComponent {
  private readonly pagingService = inject(GridPagingService);
  data = this.pagingService.athletesData;
}
