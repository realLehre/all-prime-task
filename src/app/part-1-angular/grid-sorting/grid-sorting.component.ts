import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { GirdSortingService } from './services/gird-sorting.service';
import {
  DefaultSortingStrategy,
  IgxButtonDirective,
  IgxCellTemplateDirective,
  IgxColumnComponent,
  IgxComboClearIconDirective,
  IgxComboItemDirective,
  IgxGridComponent,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarComponent,
  IgxSimpleComboComponent,
  ISortingOptions,
  SortingDirection,
} from 'igniteui-angular';
import { ISortData } from './models/grid-sorting.interface';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-grid-sorting',
  imports: [
    IgxSimpleComboComponent,
    FormsModule,
    UpperCasePipe,
    IgxComboClearIconDirective,
    IgxComboItemDirective,
    IgxColumnComponent,
    IgxCellTemplateDirective,
    IgxButtonDirective,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarComponent,
    IgxGridComponent,
  ],
  templateUrl: './grid-sorting.component.html',
  styleUrl: './grid-sorting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridSortingComponent implements AfterViewInit {
  private readonly gridSortingService = inject(GirdSortingService);
  grid1: Signal<IgxGridComponent | any> = viewChild('grid1', {
    read: IgxGridComponent,
  });

  public data: ISortData[] = this.gridSortingService.sortData;
  public sortingTypes: ISortingOptions[] = [
    {
      mode: 'single',
    },
    {
      mode: 'multiple',
    },
  ];
  public sortingOptions: ISortingOptions = this.sortingTypes[1];

  public ngAfterViewInit(): void {
    this.grid1().sortingExpressions = [
      {
        dir: SortingDirection.Asc,
        fieldName: 'CategoryName',
        ignoreCase: true,
        strategy: DefaultSortingStrategy.instance(),
      },
    ];
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
  }

  handleSearchResults(event: KeyboardEvent) {
    event.preventDefault();
  }
}
