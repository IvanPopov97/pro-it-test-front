import EmployeeList from '../../components/List/EmployeeList'
import EmployeeTree from '../../components/Tree/EmployeeTree'
import CompanyList from '../../components/List/CompanyList'
import CompanyTree from '../../components/Tree/CompanyTree'
import {SET_CURRENT_PATH} from "../types";
import AddCompanyForm from "../../components/AddForm/AddCompanyForm";
import AddEmployeeForm from "../../components/AddForm/AddEmployeeForm";

const initialState = {
    items: [
        {
            id: 0,
            name: 'Список сотрудников',
            component: EmployeeList,
            link: '/employeeList',
            showCreateButton: true,
            showInMainMenu: true
        },
        {
            id: 1,
            name: 'Список организаций',
            component: CompanyList,
            link: '/companyList',
            showCreateButton: true,
            showInMainMenu: true
        },
        {
            id: 2,
            name: 'Дерево сотрудников',
            component: EmployeeTree,
            link: '/employeeTree',
            showCreateButton: false,
            showInMainMenu: true
        },
        {
            id: 3,
            name: 'Дерево компаний',
            component: CompanyTree,
            link: '/companyTree',
            showCreateButton: false,
            showInMainMenu: true
        },
        {
            id: 4,
            //name: null,
            component: AddCompanyForm,
            link: '/add/companyList',
            showCreateButton: false,
            showInMainMenu: false
        },
        {
            id: 5,
            //name: null,
            component: AddEmployeeForm,
            link: '/add/employeeList',
            showCreateButton: false,
            showInMainMenu: false
        }
    ],
    mainItemId: 0,
    currentPath: '/'
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PATH:
            return {...state, currentPath: action.payload}
        default: return state;
    }
}

export default appReducer;