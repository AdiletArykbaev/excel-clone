import {Page} from "@core/Page"
import {$} from "@core/DOM"
import {createRecordsTable} from "@/pages/dashboardFunctions.js"
export class Dashboard extends Page{
    getRoot() {
        const now = Date.now().toString()
        return $.create("div","db").html(`
        <div class="db">
        <div class="db__header">
             <h1>welcome to Excel Dashboard</h1> 
        </div>
        <div class="db__new">
            <div class="db__view">
             <a href="#excel/${now}" class="db__create">
                 НОВАЯ  <br>   ТАБЛИЦА
             </a>
            </div>
      
        </div>
        <div class="db__table db__view">
          ${createRecordsTable()}
    </div>
        `)
    }
}