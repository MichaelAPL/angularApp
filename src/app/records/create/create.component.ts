import { Component, OnInit } from '@angular/core';
import { JogginRecordService } from '../../shared/joggin-record.service';
import { log } from 'util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private record: any;
  

  constructor(private jogginRecordService: JogginRecordService) {
    this.record = {
      distance: null,
      description: null,
      createdAt: null
    }
  }

  ngOnInit() {
  }

  createNewRecord(): void {
    console.log(this.record);
    this.jogginRecordService.createRecord(this.record).then(response => {
      console.log(response);
    });
  }

}
