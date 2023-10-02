const token = '357d0a3316269ea39d179efecd857e6f460ccc056ce13de1'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-collection-flask.onrender.com//api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

        },

        create: async(data: any = {}) => {
            const response = await fetch(`https://car-collection-flask.onrender.com//api/cars`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
    
            if(!response.ok){
                throw new Error('Failed to Create new data on server')
            }
    
            return await response.json()
    },
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://car-collection-flask.onrender.com//api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
                
            },
            body: JSON.stringify(data)
        })
            if (!response.ok) {
                throw new Error('Failed to update data on server')
            }

            return await response.json()
        },

        delete: async(id:string) => {
            const response = await fetch(`https://car-collection-flask.onrender.com//api/cars/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
    
            })
        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}