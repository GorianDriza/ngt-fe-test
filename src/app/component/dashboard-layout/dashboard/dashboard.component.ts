import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FundsService } from 'src/app/shared/services/funds.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['index', 'fund_name', 'subfund_name', 'share_class_name', 'date', 'report_status', 'nb_alerts'];
  dataSource = new MatTableDataSource<{}>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading = true;

  constructor(private fundService: FundsService) {
    this.fundService.getFunds().subscribe(
      (response) => {
      console.log('response', response);
      this.dataSource.data = response;
      this.isLoading = false;
      },
      (error) => this.isLoading = false
    );
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
