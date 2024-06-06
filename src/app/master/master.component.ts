import { Component, ElementRef, OnInit, ViewChild, OnChanges, NgModule, Input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GridModule, SelectableMode, SelectableSettings, SelectionEvent } from '@progress/kendo-angular-grid';
import { PersonService } from '../person.service';
import '@angular/localize/init';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { from } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-master',
    standalone: true,
    imports: [
        ReactiveFormsModule ,
        GridModule, // Import the Kendo Grid module here 
        CommonModule,
        HttpClientModule // Add HttpClientModule here
    
    ],
    providers: [PersonService],
    templateUrl: './master.component.html',
    styleUrl: './master.component.css'
})

  


export class MasterComponent implements OnInit {
    [x: string]: any;

    @ViewChild('ly') ly!: ElementRef;
    @Input() DATA: string | undefined; // decorate the property with @Input()
    // @output() force: string | undefined; // decorate the property with @Input()

    title = 'the title';
    public checkboxOnly = false;
    public mode: SelectableMode = "single";
    public drag = false;
    public selectableSettings!: SelectableSettings;


    gridview: any;

  

    public form: FormGroup;

    constructor(private personService: PersonService) {
        this.setSelectableSettings();
        this.form = new FormGroup({
            id:new FormControl(0),
            name: new FormControl(''),
            surname: new FormControl(''),
            message: new FormControl(''),

        });
    }
    ngOnInit(): void {
        this.gridview = this.DATA;
        this.personService.getPersons().subscribe(data => {
            console.log("data is ", data)
        });


    }

    public setSelectableSettings(): void {
        if (this.checkboxOnly || this.mode === "single") {
            this.drag = false;
        }

        this.selectableSettings = {
            checkboxOnly: this.checkboxOnly,
            mode: this.mode,
            drag: this.drag,
        };
    }

    ngonchanges() {

    }
    add() {
        this.gridview.push({
            name: this.form.controls['name'].value,
            surname: this.form.controls['surname'].value,
            message: this.form.controls['message'].value
        })
        this.form.controls['name'].setValue(null) ;
        this.form.controls['surname'].setValue(null) ;
        this.form.controls['message'].setValue(null) ;
    }

    Save() {
//create a transaction

this.gridview.filter((e: any) =>
{    if (e.id== this.form.controls['id'].value)
    {
        console.log("elem is",e)
        e.name=this.form.controls['name'].value
        e.surname=this.form.controls['surname'].value
        e.message=this.form.controls['message'].value
    }
    }
)
        // this.gridview[5].name = this.ly.nativeElement.name.value;
        // this.gridview[5].surname = this.ly.nativeElement.surname.value;

        // console.log("Name is",this.myForm.controls['name'].value)
        // console.log("Surname is",this.myForm.controls['surname'].value)
        // reckey
        // Prg
        // transaction


    }

    onSelectionChange(event: SelectionEvent) {
        console.log("event is", event)

        if (event.selectedRows != undefined) {
            this.form.controls['id'].setValue(event.selectedRows[0].dataItem.id)
            this.form.controls['name'].setValue(event.selectedRows[0].dataItem.name)
            this.form.controls['surname'].setValue(event.selectedRows[0].dataItem.surname)
            this.form.controls['message'].setValue(event.selectedRows[0].dataItem.message)

            // this.DATA.name = event.selectedRows[0].dataItem.name;
            // this.DATA.surname = event.selectedRows[0].dataItem.surname;

        }

        // const selectedRow = event.selectedRows[0];
        // if (selectedRow) {
        // }
    }



    deletee() {
        //delete the clicked element
        // this.gridview.pop()
        this.gridview.splice(this.form.controls['id'].value, 1);

        // Refresh the grid
        this.gridview = [...this.gridview];

            // this.personService.deleteUser(this.form.controls['id'].value).subscribe((data: any) => {
            //     console.log("data is",data)
            // })
  
    }

}
