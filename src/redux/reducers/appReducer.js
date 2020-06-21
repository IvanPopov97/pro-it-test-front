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
            link: '/employeeList'
        },
        {
            id: 1,
            name: 'Список организаций',
            component: CompanyList,
            link: '/companyList'
        },
        {
            id: 2,
            name: 'Дерево сотрудников',
            component: EmployeeTree,
            link: '/employeeTree'
        },
        {
            id: 3,
            name: 'Дерево компаний',
            component: CompanyTree,
            link: '/companyTree'
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