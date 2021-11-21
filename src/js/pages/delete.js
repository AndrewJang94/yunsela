import makeElement from "../utils/makeElement"
import button from "../components/button/"
import { Router } from "../routes/router"
import { getStore } from "../redux/store"
import reducer from "../redux/reducer"

const cancelButton = button("cancel")
const deleteButton = button("delete")

const deletePage = function(props){

    const page = document.createElement('div') 
    // CANCEL DELETE EVENT HANDLER
    function onCancelDelete (e){
    Router('/todo')
    }

    function onDeleteTodo (e){

        const index = getStore().findIndex((employee)=>{
            return (employee.id === props.id)
            })
            const action = {
            type:"delete",
            payload:{index},
            cb:()=> Router('/todo')
            }
            
            reducer(action)

    }
    
    let headerTemplate = `
<header class="welcome center-in-page">
<h1>Delete Employee</h1>
<p>Remove Employee</p> 
<div></div>
</header>
`
const pageHeader = makeElement(headerTemplate) 
cancelButton.addEventListener('click', onCancelDelete) 
deleteButton.addEventListener('click', onDeleteTodo) 
pageHeader.querySelector('div').append(cancelButton, deleteButton)
page.append(pageHeader)

return page
}

    export default deletePage