import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "./types";

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
}

// Generar id
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}


export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    activeId: '',
    // Agregar pacientes
    addPatient: (data) => {
        const newPatient = createPatient(data)
        // Modificar o setear el state 
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },

    // Eliminar pacientes
    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },

    // Ediar paciente
    getPatientById: (id) => {
        set(() => ({
            activeId: id
        }))
    }
})) 