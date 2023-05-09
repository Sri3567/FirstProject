import { Component } from "@angular/core";
@Component({
    selector:'app-title',
    template:'<h1 [title]="msg" (click)="show(78)"><i class="bi bi-shop"></i> {{title}}</h1>',
    styles:[]
})
export class TitleComponent
{
    title:string = "My-Store"
    msg:string="Hello...! Welcome to MyStore "

    show(num:number)
    {
        console.log("Number is "+num)
    }
}

/*
    here 
        @Component is built-in Decorator,
        which used to decalre current class is Component class.

        It is used contain Extra information (i.e meata-data)
        about a Component.
Variable declaration Syntax
    variable_name:datatype

    
*/ 