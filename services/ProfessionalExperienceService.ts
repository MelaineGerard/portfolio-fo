import axios from 'axios';
import {ProfessionalExperience} from "~/interfaces/ProfessionalExperience";

export async function getProfessionalExperiences(): Promise<Array<ProfessionalExperience>> {
    const response = await axios.get('https://portfolio-bo.melaine-gerard.fr/items/ProfessionalExperience');
    if (response.status !== 200) {
        return [];
    }
    return response.data.data;
}