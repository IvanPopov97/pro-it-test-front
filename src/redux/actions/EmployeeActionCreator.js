import {ActionCreator} from "./ActionCreator";

export const employeeActionCreator = new ActionCreator({modelName: 'employees', requestPath: '/employee'})