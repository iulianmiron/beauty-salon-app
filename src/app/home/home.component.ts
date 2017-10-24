import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'bsa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animal: string;
  name: string;
  foods: string[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result.animal;
      this.foods = result.foods;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  foodGroups = [
    {
      name: 'vegetables',
      foods: [
        {value: 'steak-1', viewValue: 'Steak'},
        {value: 'pizza-2', viewValue: 'Pizza'},
        {value: 'tacos-3', viewValue: 'Tacos'}
      ]
    },
    {
      name: 'meats',
      foods: [
        {value: 'steak-123', viewValue: 'Steak'},
        {value: 'pizza-1231231', viewValue: 'Pizza'},
        {value: 'tacos-123123', viewValue: 'Tacos'}
      ]
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
