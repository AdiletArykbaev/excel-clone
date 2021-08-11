import { ExcelComponent } from "@core/ExcelComponent.js";
import {createTable} from "@/components/table/table.template.js"
import {resizeHandler} from "@/components/table/table.resize.js"
import {shouldResize} from "@/components/table/table.functions.js"
export class Table extends ExcelComponent {
    static className = "excel__table"
    constructor($root){
        super($root,{
            listeners:["mousedown"]
        })
    }
    toHTML(){
        return createTable(20)
    }
    onMousedown(event){
        if(shouldResize(event)){
            resizeHandler(this.$root,event)
        }
        
    }
   
}