//@flow
const baseUrl = "http://localhost:3000";

export default {
    getAll: () => fetch(`${baseUrl}/single-cases`)
                    .then(res => res.json()),
    getWeeksTemplate: () => fetch(baseUrl+'/weeks-templates')
                            .then(res => res.json()),
    deleteSingleTemplate: (id) => fetch(`${baseUrl}/single-cases/${id}`, {method: 'DELETE'})
                                    .then(res => res.json()),
    deleteWeekTemplate: (id) => fetch(`${baseUrl}/weeks-templates/${id}`, {method: 'DELETE'})
                                .then(res => res.json()),
    addNewSingleTemplate: (data) => fetch(`${baseUrl}/single-cases`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    }).then(response => response.json()),
    updateSingleTemplate: (id, title, description) => fetch(`${baseUrl}/single-cases/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: title,
            description: description
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(response => response.json())
}