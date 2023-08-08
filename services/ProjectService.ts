import axios from 'axios';
import { Project } from '~/interfaces/Project';

export async function getProjects(): Promise<Array<Project>> {
    const response = await axios.get('https://portfolio-bo.melaine-gerard.fr/items/Project');
    if (response.status !== 200) {
        return [];
    }
    return response.data.data;
}