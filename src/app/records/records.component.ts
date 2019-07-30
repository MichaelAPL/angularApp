import { Component, OnInit } from '@angular/core';
import { JogginRecordService } from '../shared/joggin-record.service';
import { log } from 'util';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  providers: [JogginRecordService]
})
export class RecordsComponent implements OnInit {

  private joggingRecords: any[];
  private displayedColumns: string[] = ['id', 'description', 'distance', 'createdAt'];

  constructor(private jogginRecordService: JogginRecordService) {
    this.joggingRecords = [];
  }

  ngOnInit() {
    this.jogginRecordService.getAll().subscribe(data => {
      console.log(data);
      this.joggingRecords = data;
    });
  }

}
