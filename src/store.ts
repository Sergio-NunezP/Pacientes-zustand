import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "./types";

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

// Generar id
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

// State
export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
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
        },

        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
                activeId: ''
            }))
        }

    })
    ))