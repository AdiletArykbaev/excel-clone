
import {Router} from "@core/routes/router"
import {Dashboard} from "@/pages/DashboardPage"
import { ExcelPage } from "@/pages/ExcelPage"
import "./scss/index.scss"


new Router("#app",{
    dashboard:Dashboard,
    excel:ExcelPage
})