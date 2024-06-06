import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterComponent } from "./master/master.component";
import { MyFormComponent } from "./my-form/my-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MasterComponent, MyFormComponent]
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.DATA=[{
            id:0,
            name: 'Mohamed El Hedi',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        },
        {
            id:1,
            name: 'Mohamed',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        }, {
            id:2,
            name: 'Med El Hedi',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        }, {
            id:3,
            name: 'Med',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        },
        {
            id:4,
            name: 'Hedi',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        },
        {
            id:4,
            name: 'Hedi',
            surname: 'Limem',
            email:"ml@en.tn",
            age:"25",
            phone:"12354",
            message:"Hello Mohamed"
        }
            
        ]
    }

    signal(){
    }
    DATA: any;
  title = 'test-project';
}


// {
//     id:5,
//     name: 'Mohamed El Hedi',
//     surname: 'Limem',
//     email:"ml@en.tn",
//     age:"25",
//     phone:"12354",
//     message:"Hello Mohamed, you are a real hero. You are able to do it! we are all with you, please do it!we encourage you! our heart with you"

// }