import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridModule, SelectableMode, SelectableSettings, SelectionEvent } from '@progress/kendo-angular-grid';
import '@angular/localize/init';




@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    ReactiveFormsModule ,
    GridModule, // Import the Kendo Grid module here 
],  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})

export class MyFormComponent implements OnInit {

    form: FormGroup;
    gridview: any;
    @Input() DATA: string | undefined; // decorate the property with @Input()

    public selectableSettings!: SelectableSettings;


    constructor() {
      this.form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl(''),
        age: new FormControl(''),
        phone: new FormControl(''),
        message: new FormControl('')
      });
    }
    ngOnInit(): void {
        this.gridview=this.DATA
    }
  

    onSelectionChange(event: SelectionEvent) {
        console.log("event is", event)

        if (event.selectedRows != undefined) {
            this.form.controls['id'].setValue(event.selectedRows[0].dataItem.id)
            this.form.controls['name'].setValue(event.selectedRows[0].dataItem.name)
            this.form.controls['surname'].setValue(event.selectedRows[0].dataItem.surname)

            // this.DATA.name = event.selectedRows[0].dataItem.name;
            // this.DATA.surname = event.selectedRows[0].dataItem.surname;

        }

        // const selectedRow = event.selectedRows[0];
        // if (selectedRow) {
        //   console.log(`Selected Row Index: ${selectedRow.index}`);
        //   console.log(`Selected Row Data: `, selectedRow.dataItem);
        // }
    }

    public setSelectableSettings(): void {

    }

}
