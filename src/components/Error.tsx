

export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-center my-4 bg-red-700 text-white font-bold uppercase p-3 text-sm">{children}</p>
    )
}
