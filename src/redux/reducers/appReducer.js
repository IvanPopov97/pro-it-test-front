import EmployeeList from '../../components/EmployeeList'
import EmployeeTree from '../../components/EmployeeTree'
import CompanyList from '../../components/CompanyList'
import CompanyTree from '../../components/CompanyTree'
import {SET_CURRENT_PATH} from "../types";

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