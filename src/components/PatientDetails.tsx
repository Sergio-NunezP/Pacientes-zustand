import { Patient } from "../types"

export type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div>
            {patient.name}
        </div>
    )
}
