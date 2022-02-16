import { Button,Field,Form,ConfigProvider } from 'vant'
import Page from '../components/layout/Page.vue'
const components = [
    Button,Field,Form,ConfigProvider,
]
const layout = [
    Page
]
export const useComponents = (app)=>{
    components.map(component=>app.use(component))
    layout.map(component=>app.component(component.name,component))
    return app;
}
