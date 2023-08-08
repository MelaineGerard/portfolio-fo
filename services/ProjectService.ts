import axios from 'axios';

interface Project {
    id: number,
    name: string,
    description: string,
    link: string,
    date_created: string,
    date_updated: string|null,
}



export async function getProjects(): Promise<Array<Project>> {
    const response = await axios.get('https://portfolio-bo.melaine-gerard.fr/items/Project');
    if (response.status !== 200) {
        return [];
    }
    return response.data.data;
}