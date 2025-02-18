import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "./types";

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

// Generar id
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}


export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        // Modificar o setear el state 
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
})) 