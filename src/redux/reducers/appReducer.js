import EmployeeList from '../../components/EmployeeList'
import EmployeeTree from '../../components/EmployeeTree'
import CompanyList from '../../components/CompanyList'
import CompanyTree from '../../components/CompanyTree'

const initialState = {
    items: [
        {
            id: 0,
            name: 'Список сотрудников',
            component: EmployeeList,
            link: '/employeeList',
            showCreateButton: true
        },
        {
            id: 1,
            name: 'Список организаций',
            component: CompanyList,
            link: '/companyList',
            showCreateButton: true
        },
        {
            id: 2,
            name: 'Дерево сотрудников',
            component: EmployeeTree,
            link: '/employeeTree',
            showCreateButton: false
        },
        {
            id: 3,
            name: 'Дерево компаний',
            component: CompanyTree,
            link: '/companyTree',
            showCreateButton: false
        }
    ],
    mainItemId: 0
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default appReducer;