// export const mapValuesToDto = values => ({
//     name: values.name,
//     company: values.company ? {id: Number(values.company)} : null
// })

export const required = (values, error = 'Обязательно укажите название компании') => {
    return (
        (values && values.trim().length > 0) ? undefined : error
    )
}