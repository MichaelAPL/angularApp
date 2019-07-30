import { Component } from '@angular/core';
import { JogginRecordService } from '../app/shared/joggin-record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JogginRecordService]
})
export class AppComponent {
  private joggingRecords: any[];

  constructor(private jogginRecordService: JogginRecordService) {
    this.joggingRecords = [];
  }

  ngOnInit() {
    this.jogginRecordService.getAll().subscribe(data => {
      this.joggingRecords = data;
    });
  }
}
